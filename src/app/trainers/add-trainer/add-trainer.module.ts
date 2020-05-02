import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileSelectDirective } from 'ng2-file-upload';

import { AddTrainerRoutingModule } from './add-trainer-routing.module';
import { AddTrainerComponent } from './add-trainer.component';

@NgModule({
  imports: [
    CommonModule,
    AddTrainerRoutingModule,
  ],
  declarations: [
    AddTrainerComponent,
    FileSelectDirective,
  ],
})
export class AddTrainerModule { }
