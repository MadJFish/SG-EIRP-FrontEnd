import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';

/*
const routes: Routes =[
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  }, {
    path: '',
    component: AppLayoutComponent,
    children: [{
      path: '',
      loadChildren: './layout/app-layout/app-layout.module#AppLayoutModule'
    }]
  }
];
*/

const routes: Routes =[
  
  /*
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  */
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  
  {
    path: '',
    component: AppLayoutComponent,
    children: [{
      path: '',
      loadChildren: './layout/app-layout/app-layout.module#AppLayoutModule'
    }]
  },

  {
    path: 'dashboard',
    component: AppLayoutComponent,
    children: [
      { path: '', component: DashboardComponent },
    ]
  },

  // otherwise redirect to home
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
