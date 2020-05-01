import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

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
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }; 