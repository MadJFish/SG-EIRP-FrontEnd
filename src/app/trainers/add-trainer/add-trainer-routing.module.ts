import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTrainerComponent } from './add-trainer.component';

const routes: Routes = [
  { path: '', component: AddTrainerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddTrainerRoutingModule { }