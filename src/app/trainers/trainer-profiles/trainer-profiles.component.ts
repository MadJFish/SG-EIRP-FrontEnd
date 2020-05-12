import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService, CodeService } from 'app/_services';
import { TutorAgencyService } from 'app/_services';
import { fileUploadService } from 'app/_services';
import { TutorAgencyDto, DocumentDto, Code } from 'app/_models';
import { GloblConstants } from 'app/common/global-constants';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { CommonUtils } from 'app/common/commonUtils';

@Component({
    selector: 'app-trainer-profiles',
    templateUrl: './trainer-profiles.component.html',
    styleUrls: ['./trainer-profiles.component.css']
})
export class TrainerProfilesComponent implements OnInit {
    // data binding
    tutorAgency: TutorAgencyDto = new TutorAgencyDto();
    private profileImage: string;
    private profileImageDto: DocumentDto;
    private educationLevels: Code[];
    private subjects: Code[];
    private locations: Code[];

    private editModeEnabled: boolean = false;
    private loading = false;

    // form
    agencyForm: FormGroup;

    // native file upload
    selectedFiles: FileList;
    currentFileUpload: File;
    progress: { percentage: number } = { percentage: 0 };
    selectedFile = null;
    changeImage = false;

    constructor(
        private codeService: CodeService,
        private userService: UserService,
        private tutorAgencyService: TutorAgencyService,
        private fileUploadService: fileUploadService,
        private formBuilder: FormBuilder
    ) {
    }

    ngOnInit() {
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
                    console.log(JSON.stringify(this.profileImage));
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

    upload(documentDto: DocumentDto) {
        this.progress.percentage = 0;
        this.currentFileUpload = this.selectedFiles.item(0);

        console.log(JSON.stringify(documentDto));

        this.fileUploadService.pushFileToStorage(this.currentFileUpload, documentDto)
            .subscribe(document => {
                console.log(document);
                this.profileImage = document;
            });
    }

    uploadProfileImage(event) {
        this.selectedFiles = event.target.files;

        // set dto
        if (this.profileImageDto == null) {
            this.profileImageDto = new DocumentDto();
            this.profileImageDto.documentType = GloblConstants.profileImage;
            this.profileImageDto.uploadType = GloblConstants.agencyUploadType;
            this.profileImageDto.referenceId = this.tutorAgency.id;
        }

        this.upload(this.profileImageDto);
    }
}
