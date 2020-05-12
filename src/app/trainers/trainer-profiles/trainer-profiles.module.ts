import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TrainerProfilesRoutingModule } from './trainer-profiles-routing.module';
import { TrainerProfilesComponent } from './trainer-profiles.component';

@NgModule({
  imports: [
    CommonModule,
    TrainerProfilesRoutingModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatRadioModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [TrainerProfilesComponent]
})
export class TrainerProfilesModule { }
