import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from 'app/_models';
import { CommonUtils } from 'app/common/commonUtils';
import { GloblConstants } from 'app/common/global-constants';
import { map } from 'rxjs/internal/operators/map';
import { TutorEnrollRequestDto } from 'app/_models/_agencyAndProgram/tutorAgency';
import { catchError } from 'rxjs/operators';

import { ConfigService } from '../config/config.service';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(
        private http: HttpClient,
        private config: ConfigService
        ) { }

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

    delete(id: number) {
        return this.http.delete(`${config.apiUrl}/users/${id}`);
    }
}