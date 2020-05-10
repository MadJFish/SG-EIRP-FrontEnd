import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { JwtHelperService } from '@auth0/angular-jwt';

import { BehaviorSubject, Observable } from 'rxjs';

import { User, AccessToken } from 'app/_models';
import { CommonUtils } from 'app/common/commonUtils';
import { GloblConstants } from 'app/common/global-constants';
import { map } from 'rxjs/internal/operators/map';

const jwtHelper = new JwtHelperService();

@Injectable({ 
    providedIn: 'root'
})
export class AuthenticationService {
    private authentication_username = 'clientId';
    private authentication_password = 'secret';

    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    private currentAccessTokenSubject: BehaviorSubject<AccessToken>;
    public currentAccessToken: Observable<AccessToken>;

    constructor(
        private http: HttpClient,
        public jwtHelper: JwtHelperService) {
        this.currentAccessTokenSubject = new BehaviorSubject<AccessToken>(JSON.parse(localStorage.getItem(GloblConstants.currentAccessToken)));
        this.currentAccessToken = this.currentAccessTokenSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    public get currentAccessTokenValue(): AccessToken {
        return this.currentAccessTokenSubject.value;
    }

    isAuthenticated(): boolean {
        if (!this.currentAccessTokenSubject.value) {
            return false;
        }

        return !this.jwtHelper.isTokenExpired(this.currentAccessTokenSubject.value.access_token);
    }

    getAuthenticationOptions(): any {
        let httpOptions = {
            headers: new HttpHeaders({
              'Content-Type': 'application/x-www-form-urlencoded',
              'Authorization': "Basic " + btoa(this.authentication_username + ":" + this.authentication_password)
            })
        };
        
        console.log(httpOptions);
        
        return httpOptions;
    }

    getAuthenticationData(username, password): any {
        let params = new URLSearchParams();
        params.append('grant_type', 'password');
        params.append('username', username);
        params.append('password', password);
        return params;
    }

    login(username, password) {
        let api = CommonUtils.getUserAPI(GloblConstants.loginURL);
        console.log(api);
        console.log("username: " + username);
        console.log("password: " + password);

        let config = this.getAuthenticationOptions();
        console.log(config.toString());

        return this.http.post<any>(`${api}`, this.getAuthenticationData(username, password).toString(), config)
            .pipe(map(accessToken => {
                // store jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem(GloblConstants.currentAccessToken, JSON.stringify(accessToken));
                this.currentAccessTokenSubject.next(<AccessToken> <unknown> accessToken);
                
                return accessToken;
            }));
    }

    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem(GloblConstants.currentAccessToken);
        this.currentAccessTokenSubject.next(null);
    }
}