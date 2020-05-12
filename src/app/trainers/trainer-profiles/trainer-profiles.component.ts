import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { UserService, CodeService } from 'app/_services';
import { TutorAgencyService } from 'app/_services';
import { fileUploadService } from 'app/_services';
import { TutorAgencyDto, DocumentDto, Code, TutorAgencyDetailDto, EducationAgencyLeadershipDto } from 'app/_models';
import { GloblConstants } from 'app/common/global-constants';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { CommonUtils } from 'app/common/commonUtils';
import { Observable } from 'rxjs';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
    selector: 'app-trainer-profiles',
    templateUrl: './trainer-profiles.component.html',
    styleUrls: ['./trainer-profiles.component.css']
})
export class TrainerProfilesComponent implements OnInit {
    // data binding
    private tutorAgency: TutorAgencyDto = new TutorAgencyDto();
    private tutorAgencyDetail: TutorAgencyDetailDto = new TutorAgencyDetailDto();
    private profileImage: string;
    private managementImage: string;
    private profileImageDto: DocumentDto;
    private managementImageDto: DocumentDto;
    private educationLevels: Code[];
    private subjects: Code[];
    private locations: Code[];

    private photos: DocumentDto[];
    private videos: DocumentDto[];
    private playingVideos: DocumentDto[];
    private references: DocumentDto[];

    private previewVideoUrl: string;
    private previewVideoType: string;
    private showPreviewVieo: boolean;

    private editModeEnabled: boolean = false;
    private editManagementEnabled: boolean = false;
    private loading = false;

    private leadershipTeams: EducationAgencyLeadershipDto[];
    private tempLeader: EducationAgencyLeadershipDto;

    // form
    private agencyForm: FormGroup;
    private leaderForm: FormGroup;

    // native file upload
    private profileImageFiles: FileList;
    private managementImageFiles: FileList;
    private photoFiles: FileList;
    private videoFiles: FileList;
    private referenceFiles: FileList;
    currentFileUpload: File;
    progress: { percentage: number } = { percentage: 0 };
    selectedFile = null;
    changeImage = false;

    @ViewChild('videoPlayer') videoPlayer: ElementRef;

    constructor(
        private codeService: CodeService,
        private userService: UserService,
        private tutorAgencyService: TutorAgencyService,
        private fileUploadService: fileUploadService,
        private formBuilder: FormBuilder
    ) {
    }

    ngOnInit() {
        this.showPreviewVieo = false;

        // initialize form group
        this.agencyForm = this.formBuilder.group({
            promoText: new FormControl(),
            aboutUs: new FormControl(),
            phone: new FormControl(),
            email: new FormControl(),
            subjects: new FormArray([]),
            educationLevels: new FormArray([]),
            locations: new FormArray([]),
        });

        this.leaderForm = this.formBuilder.group({
            name: new FormControl(),
            designation: new FormControl(),
            description: new FormControl()
        });

        // get uesr id
        const agencyId: string = this.userService.currentUserValue.tutorAgentId;

        console.log(agencyId);

        // get user agency
        this.tutorAgencyService.getAgencyByAgencyId(agencyId)
            .subscribe((tutorAgencyDto: TutorAgencyDto) => {
                this.tutorAgency = tutorAgencyDto;

                // set profile image
                if (tutorAgencyDto.tutorAgencyDocuments != null) {
                    let documentDto =
                        tutorAgencyDto.tutorAgencyDocuments
                            .filter(document => document.documentType === GloblConstants.profileImage)
                            [0];
                    this.profileImageDto = documentDto;
                    this.profileImage = this.profileImageDto.documentUrl;
                }

                // set photos
                if (tutorAgencyDto.tutorAgencyDocuments != null) {
                    this.photos =
                        tutorAgencyDto.tutorAgencyDocuments
                            .filter(document => document.documentType === GloblConstants.photo);
                }

                // set videos
                if (tutorAgencyDto.tutorAgencyDocuments != null) {
                    this.videos =
                        tutorAgencyDto.tutorAgencyDocuments
                            .filter(document => document.documentType === GloblConstants.video);
                }

                // set attachments
                if (tutorAgencyDto.tutorAgencyDocuments != null) {
                    this.references =
                        tutorAgencyDto.tutorAgencyDocuments
                            .filter(document => document.documentType === GloblConstants.attachment);
                }

                console.log("test 1: " + JSON.stringify(this.tutorAgency));
            });

        // education levels
        this.codeService.getByType(GloblConstants.educationLevelCodeType)
            .subscribe(
                (EducationLevelData: Code[]) => {
                    this.educationLevels = EducationLevelData.filter(educationLevel => {
                        educationLevel.isChecked = false;
                        return educationLevel;
                    });

                    // creating checkbox
                    this.educationLevels.forEach((edu, i) => {
                        const control = new FormControl(false);
                        (this.agencyForm.controls.educationLevels as FormArray).push(control);
                    });
                }
            );
        
        // subjects
        this.codeService.getByType(GloblConstants.subjectCodeType)
            .subscribe(
                (SubjectsData: Code[]) => {
                    this.subjects = SubjectsData.filter(subject => {
                        subject.isChecked = false;
                        return subject;
                    });

                    // creating checkbox
                    this.subjects.forEach((subject, i) => {
                        const control = new FormControl(false);
                        (this.agencyForm.controls.subjects as FormArray).push(control);
                    });
                }
            );

        // locations
        this.codeService.getByType(GloblConstants.locationCodeType)
            .subscribe(
                (LocationsData: Code[]) => {
                    this.locations = LocationsData.filter(location => {
                        location.isChecked = false;
                        return location;
                    });

                    // creating checkbox
                    this.locations.forEach((edu, i) => {
                        const control = new FormControl(false);
                        (this.agencyForm.controls.locations as FormArray).push(control);
                    });
                }
            );

        // agency details
        this.tutorAgencyService.getAgencyDetailByAgencyId(agencyId)
            .subscribe((tutorAgencyDetailDto: TutorAgencyDetailDto) => {
                this.tutorAgencyDetail = tutorAgencyDetailDto;
                console.log("Tutor Agency Detail: " + JSON.stringify(this.tutorAgencyDetail));

                // leadership team
                this.leadershipTeams = this.tutorAgencyDetail.leadershipTeam;
                if (this.leadershipTeams == null) {
                    this.leadershipTeams = [];
                }
            });

    }

    // convenience getter for easy access to form fields
    get f() { return this.agencyForm.controls; }

    // creating check box

    // enter edit mode
    editMode() {
        this.loading = true;

        // set form group
        this.agencyForm.controls.promoText.setValue(this.tutorAgency.promoText);
        this.agencyForm.controls.aboutUs.setValue(this.tutorAgency.aboutUs);
        this.agencyForm.controls.phone.setValue(this.tutorAgency.phone);
        this.agencyForm.controls.email.setValue(this.tutorAgency.email);
        
        this.subjects.forEach((subject, index) => {
            var flag: boolean =
                (this.tutorAgency.subjects != null)
                && this.tutorAgency.subjects.includes(subject.description);
            this.f.subjects.get(index.toString()).setValue(flag);
        });

        this.educationLevels.forEach((educationLevel, index) => {
            var flag: boolean =
                (this.tutorAgency.targetEduLevels != null)
                && this.tutorAgency.targetEduLevels.includes(educationLevel.description);
            this.f.educationLevels.get(index.toString()).setValue(flag);
        });

        this.locations.forEach((location, index) => {
            var flag: boolean =
                (this.tutorAgency.locations != null)
                && this.tutorAgency.locations.includes(location.description);
            this.f.locations.get(index.toString()).setValue(flag);
        });

        if (!this.editModeEnabled) {
            this.editModeEnabled = true;
        }
        this.loading = false;
    }

    save() {
        this.loading = true;

        console.log("Before save: " + JSON.stringify(this.tutorAgency));
        let newAgency: TutorAgencyDto = new TutorAgencyDto();
        newAgency.copy(this.tutorAgency);

        // map code values
        this.agencyForm.value.subjects = CommonUtils.mapCodeValue(this.subjects, this.agencyForm.value.subjects);
        this.agencyForm.value.educationLevels = CommonUtils.mapCodeValue(this.educationLevels, this.agencyForm.value.educationLevels);
        this.agencyForm.value.locations = CommonUtils.mapCodeValue(this.locations, this.agencyForm.value.locations);
        
        newAgency.setContent(this.agencyForm.value);
        this.tutorAgency = newAgency;
        console.log("After save: " + JSON.stringify(newAgency));

        // update the agency data into database
        this.tutorAgencyService.saveAgency(this.tutorAgency)
            .subscribe(
                data => {
                    console.log("Save agency successfully: " +JSON.stringify(data));
                    if (this.editModeEnabled) {
                        this.editModeEnabled = false;
                    }
                    this.loading = false;
                },
                error => {
                    console.log("Save agency failed: " + error.toString());
                    if (this.editModeEnabled) {
                        this.editModeEnabled = false;
                    }
                    this.loading = false;
                }
            );
    }

    cancel() {
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

    upload(documentDto: DocumentDto, file: File) {
        console.log(JSON.stringify(documentDto));
    }

    uploadProfileImage(event) {
        this.profileImageFiles = event.target.files;

        // set dto
        if (this.profileImageDto == null) {
            this.profileImageDto = new DocumentDto();
            this.profileImageDto.documentType = GloblConstants.profileImage;
            this.profileImageDto.uploadType = GloblConstants.agencyUploadType;
            this.profileImageDto.referenceId = this.tutorAgency.id;
        }

        this.progress.percentage = 0;
        this.currentFileUpload = this.profileImageFiles.item(0);

        this.fileUploadService.pushFileToStorage(this.currentFileUpload, this.profileImageDto)
            .subscribe(document => {
                console.log(document);
                this.profileImage = document;
            });
    }

    uploadManagementImage(event) {
        this.managementImageFiles = event.target.files;

        // set dto
        if (this.managementImageDto == null) {
            /*
            this.managementImageDto = new DocumentDto();
            this.managementImageDto.documentType = GloblConstants.profileImage;
            this.managementImageDto.uploadType = GloblConstants.agencyUploadType;
            this.managementImageDto.referenceId = this.tutorAgency.id;
            */
            // for new leadership team member, upload to temp folder
            this.fileUploadService.pushFileToTempStorage(this.managementImageFiles.item(0))
                .subscribe(response => {
                    console.log(response);
                    // this.managementImage = document;
                    this.managementImage = response;
                });
            
        } else {

            /*
            this.progress.percentage = 0;

            this.fileUploadService.pushFileToStorage(this.managementImageFiles.item(0), this.managementImageDto)
                .subscribe(document => {
                    console.log(document);
                    this.managementImage = document;
                });
            */
        }
    }

    addPhoto(event) {
        this.photoFiles = event.target.files;

        console.log(this.photoFiles);

        // set dto
        if (this.photos == null) {
            this.photos = [];
        }

        console.log(this.photoFiles.length);

        if (this.photoFiles.length > 0) {
            console.log("photo length: " + this.photoFiles.length); 
            var file = this.photoFiles.item(0);
            console.log(file);
            var photoDocument: DocumentDto = new DocumentDto();
            photoDocument.documentName = file.name;
            photoDocument.documentType = GloblConstants.photo;
            photoDocument.mime = file.type;
            photoDocument.uploadType = GloblConstants.agencyUploadType;
            photoDocument.referenceId = this.tutorAgency.id;

            this.fileUploadService.pushFileToStorage(file, photoDocument)
            .subscribe(document => {
                console.log(document);
                this.photos.push(document);
            });
        }
    }

    addVideo(event) {
        this.videoFiles = event.target.files;

        console.log(this.videoFiles);

        // set dto
        if (this.videos == null) {
            this.videos = [];
        }

        console.log(this.videoFiles.length);

        if (this.videoFiles.length > 0) {
            console.log("video files length: " + this.videoFiles.length); 
            var file = this.videoFiles.item(0);
            console.log(file);
            var videoDocument: DocumentDto = new DocumentDto();
            videoDocument.documentName = file.name;
            videoDocument.documentType = GloblConstants.video;
            videoDocument.mime = file.type;
            videoDocument.uploadType = GloblConstants.agencyUploadType;
            videoDocument.referenceId = this.tutorAgency.id;

            this.fileUploadService.pushFileToStorage(file, videoDocument)
            .subscribe(document => {
                console.log(document);
                this.videos.push(document);
            });
        }
    }

    previewVideo(i) {
        console.log(i);
        this.playingVideos = [];
        this.playingVideos.push(this.videos[i]);
    }

    toggleVideo(event: any) {
        this.videoPlayer.nativeElement.play();
    }

    addReference(event) {
        this.referenceFiles = event.target.files;

        console.log(this.referenceFiles);

        // set dto
        if (this.references == null) {
            this.references = [];
        }

        console.log(this.referenceFiles.length);

        if (this.referenceFiles.length > 0) {
            console.log("photo length: " + this.referenceFiles.length); 
            var file = this.referenceFiles.item(0);
            console.log(file);
            var referenceDocument: DocumentDto = new DocumentDto();
            referenceDocument.documentName = file.name;
            referenceDocument.documentType = GloblConstants.attachment;
            referenceDocument.mime = file.type;
            referenceDocument.uploadType = GloblConstants.agencyUploadType;
            referenceDocument.referenceId = this.tutorAgency.id;

            this.fileUploadService.pushFileToStorage(file, referenceDocument)
            .subscribe(document => {
                console.log(document);
                this.references.push(document);
            });
        }
    }

    addManagement() {
        this.loading = true;
        if (!this.editManagementEnabled) {
            this.editManagementEnabled = true;
        }
        this.loading = false;
    }

    saveManagement() {
        this.loading = true;
        
        var updatedLeader = new EducationAgencyLeadershipDto();
        if (this.tempLeader == null) {
            this.tempLeader = new EducationAgencyLeadershipDto();
        }
        updatedLeader.copy(this.tempLeader);

        updatedLeader.setContent(this.leaderForm.value, this.tutorAgency.id, this.managementImage);
        var leadershipArray: EducationAgencyLeadershipDto[] = [];
        leadershipArray.push(updatedLeader);

        console.log(this.tempLeader);
        console.log(updatedLeader);

        this.tutorAgencyService.saveAgencyLeadership(leadershipArray)
            .subscribe(agencyLeaderships => {
                console.log(agencyLeaderships);
                this.saveManagementProfileImage(agencyLeaderships);
                if (this.editManagementEnabled) {
                    this.editManagementEnabled = false;
                }
                this.loading = false;
            });
    }

    saveManagementProfileImage(agencyLeaderships: EducationAgencyLeadershipDto[]) {
        if (agencyLeaderships == null || agencyLeaderships.length == 0) {
            console.log("test");
            return;
        }

        console.log("#### save agency leadership document");

        var file: File = this.managementImageFiles.item(0);
        if (this.managementImageDto == null) {
            this.managementImageDto = new DocumentDto();
        }

        this.managementImageDto.documentName = file.name;
        this.managementImageDto.documentType = GloblConstants.profileImage;
        this.managementImageDto.mime = file.type;
        this.managementImageDto.uploadType = GloblConstants.leadershipUploadType;
        this.managementImageDto.referenceId = agencyLeaderships[0].id;
        this.fileUploadService.pushFileToStorage(file, this.managementImageDto)
            .subscribe(document => {
                console.log(document);
                this.managementImageDto = document;
            });
    }

    updateManagement(i) {
        this.loading = true;
        console.log(i);
        var leader: EducationAgencyLeadershipDto = this.leadershipTeams[i];
        console.log(leader);
        this.tempLeader = leader;
        console.log(this.tempLeader);

        // update data
        this.leaderForm.controls.name.setValue(this.tempLeader.name);
        this.leaderForm.controls.designation.setValue(this.tempLeader.designation);
        this.leaderForm.controls.description.setValue(this.tempLeader.description);
        this.managementImage = this.tempLeader.imageUrl;

        if (!this.editManagementEnabled) {
            this.editManagementEnabled = true;
        }
        this.loading = false;
    }

    cancelManagement() {
        this.loading = true;
        if (this.editManagementEnabled) {
            this.editManagementEnabled = false;
        }
        this.loading = false;
    }
}
