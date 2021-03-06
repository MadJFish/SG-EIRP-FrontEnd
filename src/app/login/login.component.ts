﻿import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService, AuthenticationService, UserService } from '../_services';

import { HttpClientModule, HttpHandler, HttpHeaders } from '@angular/common/http';


@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService,
        private userService: UserService

    ) {
        // redirect to dashboard if already logged in
        if (this.authenticationService.isAuthenticated()) {
            // this.router.navigate(['/dashboard']);
        }
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;


        // reset alerts on submit
        this.alertService.clear();

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        // this.alertService.error("test");
        this.loading = true;

        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    console.log("login successfully: " + JSON.stringify(data));
                    
                    if (this.f.username.value === "Admin") {
                        this.userService.role = 1;
                    } else {
                        this.userService.role = 2;
                    }
                    // this.router.navigate([this.returnUrl]);
                    this.router.navigate(['/users-profile']);
                },
                error => {
                    console.log("login failed: " + error.toString());
                    this.alertService.error(error);
                    this.loading = false;
                }
                
                );

       // this.router.navigateByUrl('/dashboard');

    }
}
