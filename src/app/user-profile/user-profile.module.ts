import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileUploadModule } from 'ng2-file-upload';

import { UserProfileRoutingModule } from './user-profile-routing.module';
import { UserProfileComponent } from './user-profile.component';

@NgModule({
  imports: [
    CommonModule,
    UserProfileRoutingModule,
    FileUploadModule
  ],
  declarations: [UserProfileComponent]
})
export class UserProfileModule { }
