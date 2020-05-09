import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { TutorAgentRoutingModule } from './tutor-agent-routing.module';
import { TutorAgentComponent } from './tutor-agent.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TutorAgentRoutingModule,
    HttpClientModule
  ],
  declarations: [TutorAgentComponent],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class TutorAgentModule { }