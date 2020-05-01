import { Component, OnInit } from '@angular/core';
import { FileUploader, FileSelectDirective, FileUploaderOptions } from 'ng2-file-upload';

declare interface CheckBoxData {
  name: string;
  isChecked: boolean;
}
export const EducationLevelData: CheckBoxData[] = [
  { name: 'Primary School', isChecked: false },
  { name: 'Secondary School', isChecked: false },
  { name: 'Diploma', isChecked: false },
  { name: 'Bachelor', isChecked: false },
  { name: 'Master', isChecked: false },
];
export const SubjectsData: CheckBoxData[] = [
  { name: 'Math', isChecked: false },
  { name: 'Physics', isChecked: false },
  { name: 'Chemistry', isChecked: false },
];

const UploadURL = 'http://localhost:3000/api/upload';

@Component({
  selector: 'app-add-trainer',
  templateUrl: './add-trainer.component.html',
  styleUrls: ['./add-trainer.component.css']
})
export class AddTrainerComponent implements OnInit {
  educationLevels: any[];
  subjects: any[];
  title = 'Upload an Image';
  
  public uploader: FileUploader = new FileUploader({url: 'test', itemAlias: 'Image'});

  constructor() { }

  ngOnInit() {
    this.educationLevels = EducationLevelData.filter(educationLevel => educationLevel);
    this.subjects = SubjectsData.filter(subject => subject);
  
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('FileUpload:uploaded:', item, status, response);
      alert('File uploaded successfully');
    };
  }

}
