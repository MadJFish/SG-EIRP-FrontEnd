import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService, UserService, AuthenticationService } from '../_services';
import { GloblConstants } from 'app/common/global-constants';
import { TutorEnrollRequestDto } from 'app/_models/_agencyAndProgram/tutorAgency';

@Component({
    selector: 'app-register',
    templateUrl: 'register.component.html',
    styleUrls: ['./register.component.css']

})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private alertService: AlertService
    ) {
        // redirect to home if already logged in
        if (this.authenticationService.currentAccessTokenValue) {
            this.router.navigate(['/dashboard']);
        }
    }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            email: ['', Validators.required],
            username: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]],
            firstName: [''],
            lastName: [''],
            agencyName: ['', Validators.required],
            phone: ['']
        });

        let storedValue = localStorage.getItem(GloblConstants.registrationForm);
        var obj = JSON.parse(storedValue);


        console.log(storedValue);

        // load saved temperary registration form values if it exists
        if (storedValue) {
            this.registerForm.controls["email"].setValue(obj.email);
            this.registerForm.controls["username"].setValue(obj.username);
            this.registerForm.controls["password"].setValue(obj.password);
            this.registerForm.controls["firstName"].setValue(obj.firstName);
            this.registerForm.controls["lastName"].setValue(obj.lastName);
            this.registerForm.controls["agencyName"].setValue(obj.agencyName);
            this.registerForm.controls["phone"].setValue(obj.phone);
        }
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        this.loading = true;

        // Save the inputs of registration form as temperary stored data
        localStorage.setItem(GloblConstants.registrationForm, JSON.stringify(this.registerForm.value));

        // parse the register form to tutor enroll request
        let request: TutorEnrollRequestDto = new TutorEnrollRequestDto();
        request.setValue(this.registerForm.value);

        console.log("request: " + JSON.stringify(request));
        this.userService.register(request)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    // clean local temp storage for sign up data
                    localStorage.removeItem(GloblConstants.registrationForm);
                    this.router.navigate(['/login']);
                });

            /*
            ,
                (error: HttpResponse<any>) => {
                    this.alertService.error(error.body);
                    console.log("error: " + error);
                    this.loading = false;
                }
            */
    }
}
