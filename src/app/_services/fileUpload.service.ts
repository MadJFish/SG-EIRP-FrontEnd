import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { FileUploadForm } from '../_models/_common/fileUploadForm';
import { GloblConstants } from '../common/global-constants';
import { DocumentDto } from 'app/_models/_common/documentDto';

@Injectable({ providedIn: 'root' })
export class fileUploadService {

    constructor(private http: HttpClient) { }

    uploadAgencyImage(fileUploadForm: FileUploadForm): Observable<DocumentDto> {
        let api = "test";
        
        return this.http.post<FileUploadForm>(`${api}`, fileUploadForm, GloblConstants.httpOptions)
                .pipe(map((results:any) => {
                    return results.body;
                }));
    }
}
