import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProgramsRoutingModule } from './programs-routing.module';
import { ProgramsComponent } from './programs.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProgramsRoutingModule
  ],
  declarations: [ProgramsComponent],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProgramsModule { }