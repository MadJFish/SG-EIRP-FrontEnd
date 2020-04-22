import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SchoolsRoutingModule } from './schools-routing.module';
import { SchoolsComponent } from './schools.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SchoolsRoutingModule
  ],
  declarations: [SchoolsComponent],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SchoolsModule { }