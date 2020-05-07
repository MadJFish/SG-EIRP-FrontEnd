import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

import { CodeService } from '../../_services/code.service';
import { GloblConstants } from '../../common/global-constants';
import { Code } from 'app/_models/code';
import { FileUploadForm } from 'app/_models/fileUploadForm';
import { DocumentDto } from 'app/_models/document';
import { fileUploadService } from 'app/_services/fileUpload.service';

const UploadURL = 'http://localhost:8080/api/document/upload';

@Component({
  selector: 'app-add-trainer',
  templateUrl: './add-trainer.component.html',
  styleUrls: ['./add-trainer.component.css']
})
export class AddTrainerComponent implements OnInit {
  educationLevels: Code[];
  subjects: Code[];
  title = 'Upload an Image';
  theCode: Code;
  selectedFile: File;
  imagePath: String = './assets/img/default/school.png';
  fileUploadForm: FileUploadForm;
  image: DocumentDto;

  public uploader: FileUploader = new FileUploader({url: UploadURL, itemAlias: 'Image'});

  constructor(
    private codeService: CodeService,
    private fileUploadService: fileUploadService,
  ) { }

  ngOnInit() {

    this.codeService.getByType(GloblConstants.educationLevelCodeType).subscribe(
      (EducationLevelData: Code[]) => {
        this.educationLevels = EducationLevelData.filter(educationLevel => {
          educationLevel.isChecked = false;
          return educationLevel;
        });
      }
    );

    this.codeService.getByType(GloblConstants.subjectCodeType).subscribe(
      (SubjectsData: Code[]) => {
        this.subjects = SubjectsData.filter(subject => {
          subject.isChecked = false;
          return subject;
        });
      }
    );

    this.uploader.onAfterAddingFile = (file) => {
      console.log(file.file);
      file.withCredentials = false;
      
      this.fileUploadForm = new FileUploadForm();
      this.fileUploadForm.file = file;

      this.image = new DocumentDto();
      this.image.documentName = file.file.name;
      this.image.documentType = "Profile";
      this.image.mime = file.file.type;
      this.fileUploadForm.document = this.image;

      console.log(this.image);

      this.fileUploadService.uploadAgencyImage(this.fileUploadForm).subscribe(
        (DocumentData: DocumentDto) => {
          this.imagePath = DocumentData.documentUrl;  
        }
      );
    };

    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('FileUpload:uploaded:', item, status, response);
      // alert('File uploaded successfully');
    };
  }

  changeHandler(objects: Code[], type: string) {
    if (objects !== null && objects.length > 0) {
      if (type === GloblConstants.educationLevelCodeType) {
        this.theCode = this.educationLevels.find(edu => edu.id === objects[0].id);
      } else if (type === GloblConstants.subjectCodeType) {
        this.theCode = this.subjects.find(sub => sub.id === objects[0].id);
      }
      this.theCode.isChecked = !this.theCode.isChecked;
    }
  }

  onFileChanged(event) {
    // event.uploadAll();
    // console.log(event.uploadAll());


  }
}
