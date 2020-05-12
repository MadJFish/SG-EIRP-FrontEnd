import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { GloblConstants } from '../common/global-constants';
import { Code } from '../_models/index';
import { CommonUtils } from 'app/common/commonUtils';

@Injectable({ providedIn: 'root' })
export class CodeService {
    
    constructor(private http: HttpClient) { }

    getByType(type: string): Observable<Code[]> {
        console.log("type: " + type);

        let api = CommonUtils.getTutorAPI(GloblConstants.getCodeByTypeUrl) + "?type=" + type;
    
        return this.http.get<Code[]>(`${api}`)
                .pipe(map((results:any) => {
                    return results.body;
                }));
    }
}