import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User, UserResponseDto } from 'app/_models';
import { CommonUtils } from 'app/common/commonUtils';
import { GloblConstants } from 'app/common/global-constants';
import { map } from 'rxjs/internal/operators/map';
import { TutorEnrollRequestDto } from 'app/_models/index';
import { catchError } from 'rxjs/operators';

import { ConfigService } from '../config/config.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
    

    private currentUserSubject: BehaviorSubject<UserResponseDto>;
    private currentUser: Observable<UserResponseDto>;

    constructor(
        private http: HttpClient,
        private config: ConfigService) {
        this.currentUserSubject = new BehaviorSubject<UserResponseDto>(JSON.parse(localStorage.getItem(GloblConstants.currentUserProfile)));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): UserResponseDto {
        return this.currentUserSubject.value;
    }

    getAll() {
        return this.http.get<User[]>(`${config.apiUrl}/users`);
    }

    register(request: TutorEnrollRequestDto) {
        console.log("To register: " + JSON.stringify(request));

        let api = CommonUtils.getUserAPI(GloblConstants.tutorRegisterationURL);
        console.log(api);

        return this.http.post<any>(`${api}`, request)
            .pipe(
                map(response => {
                console.log("response: " + JSON.stringify(response));
                return response;
            }))
            .pipe(
                catchError(error => {
                    return this.config.handleError
                })
            );
        // return this.http.post(`${config.apiUrl}/registration/learner`, request);
        // return this.http.post(`http://ec2-13-250-119-52.ap-southeast-1.compute.amazonaws.com/api/registration/learner`, request);
    }

    getUser() {
        let api = CommonUtils.getUserAPI(GloblConstants.getCurrentUser);
        console.log(api);

        return this.http.get<any>(`${api}`)
            .pipe(
                map(userResponse => {
                    console.log("userResponse: " + JSON.stringify(userResponse));
                    // store current user profile in local storage 
                    // localStorage.setItem(GloblConstants.currentUserProfile, ) 
                    
                    let userResponseDto = userResponse.body;

                    localStorage.setItem(GloblConstants.currentUserProfile, JSON.stringify(userResponseDto));
                    this.currentUserSubject.next(<UserResponseDto> userResponseDto);

                    return userResponseDto;
                })
            );
    }

    delete(id: number) {
        return this.http.delete(`${config.apiUrl}/users/${id}`);
    }
}