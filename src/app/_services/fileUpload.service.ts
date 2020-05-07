import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { FileUploadForm } from '../_models/fileUploadForm';
import { GloblConstants } from '../common/global-constants';
import { DocumentDto } from 'app/_models/document';

const uploadImageURL : string = GloblConstants.apiURL + "document/upload";

@Injectable({ providedIn: 'root' })
export class fileUploadService {
    
    constructor(private http: HttpClient) { }

    uploadAgencyImage(fileUploadForm: FileUploadForm): Observable<DocumentDto> {
        return this.http.post<FileUploadForm>(`${uploadImageURL}`, fileUploadForm, GloblConstants.httpOptions)
                .pipe(map((results:any) => {
                    return results.body;
                }));
    }
}
