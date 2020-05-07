import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrainerProfilesComponent } from './trainer-profiles.component';

const routes: Routes = [
  { path: '', component: TrainerProfilesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainerProfilesRoutingModule { }