import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { GloblConstants } from '../common/global-constants';
import { Code } from '../_models/code';

const GetCodesByTypeURL : string = GloblConstants.apiURL + "code/getByType";

@Injectable({ providedIn: 'root' })
export class CodeService {
    
    constructor(private http: HttpClient) { }

    getByType(type: string): Observable<Code[]> {
        return this.http.get<Code[]>(`${GetCodesByTypeURL}?type=${type}`)
                .pipe(map((results:any) => {
                    return results.body;
                }));
    }
}