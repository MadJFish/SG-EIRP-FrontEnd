import { Component, OnInit } from '@angular/core';
import { UserService, AuthenticationService, TutorAgencyService } from 'app/_services';
import { Router } from '@angular/router';

import { UserResponseDto, TutorAgencyDto } from 'app/_models';

import { DocumentDto } from 'app/_models';
import { fileUploadService } from 'app/_services';
import { GloblConstants } from 'app/common/global-constants';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  private user: UserResponseDto = new UserResponseDto();
  private tutorAgency: TutorAgencyDto = new TutorAgencyDto();
  private imagePath: string = "./assets/img/faces/marc.jpg";
  private userRole: number;

  private editModeEnabled: boolean = false;
  private loading = false;

  // native file upload
  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };
  selectedFile = null;
  changeImage = false;

  constructor(
      private userService: UserService,
      private router: Router,
      private fileUploadService: fileUploadService,
      private tutorAgencyService: TutorAgencyService
  ) {}

  ngOnInit() {
      // get current user profile
      this.userService.getUser()
          .subscribe((user: UserResponseDto) => {
              this.user = user;
              console.log(JSON.stringify(user));

              this.retrieveAgency(this.user);
          });
  }

  // retrieve user agency details
  retrieveAgency(user: UserResponseDto) {
      if (user == null) {
          console.log("user is null");
          return;
      }

      const status: string = user.status;
      if (status !== GloblConstants.approvedStatus) {
          console.log("status is not APPROVED");
          return;
      }

      const agencyId: string = user.tutorAgentId;
      if (agencyId == null) {
          console.log("agency id is null.");
          return;
      }

      // retrieve tutor agency
      this.tutorAgencyService.getAgencyByAgencyId(agencyId)
          .subscribe((tutorAgencyDto: TutorAgencyDto) => {
              this.tutorAgency = tutorAgencyDto;
              console.log("test 1: " + JSON.stringify(this.tutorAgency));
          });
  }

  // edit save profile
  editProfile() {
      this.loading = true;
      if (!this.editModeEnabled) {
          this.editModeEnabled = true;
      }
      this.loading = false;
  }

  saveProfile() {
      this.loading = true;
      if (this.editModeEnabled) {
          this.editModeEnabled = false;
      }
      this.loading = false;
  }

  // native file upload
  downloadFile(){
      const link = document.createElement('a');
      link.setAttribute('target', '_blank');
      link.setAttribute('href', '_File_Saved_Path');
      link.setAttribute('download', 'file_name.pdf');
      document.body.appendChild(link);
      link.click();
      link.remove();
  }

  change($event) {
      this.changeImage = true;
  }

  changedImage(event) {
      this.selectedFile = event.target.files[0];
  }

  upload() {
      this.progress.percentage = 0;
      this.currentFileUpload = this.selectedFiles.item(0);

      // set DocumentDto
      const documentDto: DocumentDto = new DocumentDto();
      documentDto.documentType = GloblConstants.profileImage;
      documentDto.uploadType = GloblConstants.userUploadType;
      documentDto.referenceId = this.user.id;

      this.fileUploadService.pushFileToStorage(this.currentFileUpload, documentDto)
          .subscribe(response => {
              console.log(response);
              if (response.status) {
                  this.imagePath = GloblConstants.s3URL + GloblConstants.directory_separator + response.body.documentUrl;
              };
              this.selectedFiles = undefined;
          });
  }

  selectFile(event) {
      this.selectedFiles = event.target.files;
      this.upload();
  }

}
