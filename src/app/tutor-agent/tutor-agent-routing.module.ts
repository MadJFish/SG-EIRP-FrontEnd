import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TutorAgentComponent } from './tutor-agent.component';

const routes: Routes = [
  { path: '', component: TutorAgentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorAgentRoutingModule { }