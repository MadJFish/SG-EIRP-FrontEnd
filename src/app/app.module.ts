import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';
/*
import {
    AgmCoreModule
} from '@agm/core';
*/

import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AppComponent } from './app.component';
import { AppLayoutModule } from './layout/app-layout/app-layout.module';
import { AppRoutingModule } from './app-routing.module';

import { HttpHeaders } from '@angular/common/http';
//import { TutorAgentComponent } from './tutor-agent/tutor-agent.component';


@NgModule({
    imports: [
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        HttpClientModule,
        RouterModule.forRoot([]),
        AppRoutingModule,
        AppLayoutModule,
        /*
        AgmCoreModule.forRoot({
          apiKey: ''
        })
        */
    ],
    declarations: [
        AppComponent,
        //TutorAgentComponent,
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        {
            provide: JWT_OPTIONS, useValue: JWT_OPTIONS
        },
        JwtHelperService,
        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }; 