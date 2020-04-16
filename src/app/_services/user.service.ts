import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from 'app/_models';
import { SignUpRequest } from 'app/_models/signUpRequest';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${config.apiUrl}/users`);
    }

    register(request: SignUpRequest) {
        // return this.http.post(`${config.apiUrl}/registration/learner`, request);
        return this.http.post(`http://ec2-13-250-119-52.ap-southeast-1.compute.amazonaws.com/api/registration/learner`, request);
    }

    delete(id: number) {
        return this.http.delete(`${config.apiUrl}/users/${id}`);
    }
}