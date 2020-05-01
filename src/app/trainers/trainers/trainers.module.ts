import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainersRoutingModule } from './trainers-routing.module';
import { TrainersComponent } from './trainers.component';

@NgModule({
  imports: [
    CommonModule,
    TrainersRoutingModule,
  ],
  declarations: [TrainersComponent]
})
export class TrainersModule { }
