import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ProgramDto } from "app/_models";
import { Observable } from "rxjs";
import { CommonUtils } from "app/common/commonUtils";
import { GloblConstants } from "app/common/global-constants";
import { map } from "rxjs/operators";

@Injectable({ providedIn: 'root' })
export class ProgramService {

    constructor(private http: HttpClient) {
        
    }

    saveProgram(program: ProgramDto): Observable<ProgramDto> {
        let api = CommonUtils.getTutorAPI(GloblConstants.saveProgramUrl);
        console.log("api is: " + api);

        return this.http.post<ProgramDto>(`${api}`, program)
            .pipe(map((response:any) => {
                console.log("response: " +JSON.stringify(response));
                return response.body;
            }));
    }
}