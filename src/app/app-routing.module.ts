import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { CommonModule, } from '@angular/common';
// import { BrowserModule  } from '@angular/platform-browser';

// import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
// import { DashboardComponent } from './dashboard/dashboard.component';


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

//const routes: Routes =[
  
  /*
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  */
  // { path: 'login', component: LoginComponent },
  // { path: 'register', component: RegisterComponent },
  
  /*
  {
    path: '',
    component: AppLayoutComponent,
    children: [{
      path: '',
      loadChildren: './layout/app-layout/app-layout.module#AppLayoutModule'
    }]
  },
  */

  // { path: 'dashboard', component: DashboardComponent },
  //{
  //  path: 'dashboard',
  //  component: AppLayoutComponent,
  //  children: [
  //    { path: '', component: DashboardComponent },
  //  ]
  //},

  // otherwise redirect to home
  // { path: '**', redirectTo: 'login' }
//];

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
  {
    path: 'school',
    loadChildren: './schools/schools.module#SchoolsModule',
    data: { showSidebar: false }
  },
  { path: 'users-profile', loadChildren: './user-profile/user-profile.module#UserProfileModule' },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule',
    data: { showNavbar: false, showSidebar: false }
  },
  {
    path: 'register',
    loadChildren: './register/register.module#RegistrationModule',
    data: { showNavbar: false, showSidebar: false }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
