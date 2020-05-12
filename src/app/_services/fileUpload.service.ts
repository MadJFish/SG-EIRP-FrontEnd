import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { FileUploadForm } from '../_models/_common/fileUploadForm';
import { GloblConstants } from '../common/global-constants';
import { DocumentDto } from 'app/_models/_common/documentDto';
import { CommonUtils } from 'app/common/commonUtils';

@Injectable({ providedIn: 'root' })
export class fileUploadService {

    constructor(private http: HttpClient) { }

    uploadAgencyImage(fileUploadForm: FileUploadForm, id: string): Observable<DocumentDto> {
        return null;
    }

    pushFileToStorage(file: File, documentDto: DocumentDto): Observable<any> {
        // get api
        const api: string = CommonUtils.getTutorAPI(GloblConstants.documentUploadURL);
        console.log(api);

        // construct form data
        const data: FormData = new FormData();
        data.append('file', file);
        data.append('documentDtoStr', JSON.stringify(documentDto));

        return this.http.post<any>(`${api}`, data)
            .pipe(map(response => {
                console.log(response);
                return response.body;
            }));
    }
}
