import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainerProfilesRoutingModule } from './trainer-profiles-routing.module';
import { TrainerProfilesComponent } from './trainer-profiles.component';

@NgModule({
  imports: [
    CommonModule,
    TrainerProfilesRoutingModule,
  ],
  declarations: [TrainerProfilesComponent]
})
export class TrainerProfilesModule { }
