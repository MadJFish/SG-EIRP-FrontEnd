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
  {
    path: 'users-profile',
    loadChildren: './user-profile/user-profile.module#UserProfileModule',
    data: { showSidebar: false }
  },
  {
    path: 'program',
    loadChildren: './programs/programs.module#ProgramsModule',
    data: { showSidebar: false }
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule',
    data: { showNavbar: false, showSidebar: false }
  },
  {
    path: 'register',
    loadChildren: './register/register.module#RegistrationModule',
    data: { showNavbar: false, showSidebar: false }
  },
  {
    path: 'trainer',
    loadChildren: './trainers/trainers/trainers.module#TrainersModule',
    data: { showSidebar: false }
  },
  {
    path: 'add-trainer',
    loadChildren: './trainers/add-trainer/add-trainer.module#AddTrainerModule',
    data: { showSidebar: false }
  },
  {
    path: 'trainer-profile',
    loadChildren: './trainers/trainer-profiles/trainer-profiles.module#TrainerProfilesModule',
    data: { showSidebar: false }
  },
  {
    path: 'tutor-agent',
    loadChildren: './tutor-agent/tutor-agent.module#TutorAgentModule',
    data: { showSidebar: false }
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
