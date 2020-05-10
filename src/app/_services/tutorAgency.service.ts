import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { TutorAgencyDto } from "app/_models/_agencyAndProgram/tutorAgency";
import { CommonUtils } from "app/common/commonUtils";
import { GloblConstants } from "app/common/global-constants";
import { map } from "rxjs/operators";

@Injectable({ providedIn: 'root' })
export class TutorAgencyService {
    
    private allTutorAgenciesURL: string = "/api/tutorAgency/get/all";
    private allFeaturedAgenciesURL: string = "/api/tutorAgency/get/byFeatured";


    constructor(private http: HttpClient) {
        
    }

    getAllAgencies(): Observable<TutorAgencyDto[]> {
        console.log(this.allTutorAgenciesURL);
        let api = CommonUtils.getTutorAPI(this.allTutorAgenciesURL);
        console.log("api is: " + api);
        
        return this.http.get<TutorAgencyDto[]>(`${api}`)
                .pipe(map((results:any) => {
                    return results.body;
                }));
    }

    getAgencyByAgencyId(id: string): Observable<TutorAgencyDto> {
        let api = CommonUtils.getTutorAPI(GloblConstants.tutorAgencyUrl);
        console.log("api is: " + api);

        return this.http.get<any>(`${api}`, { params: {"tutorAgencyId": id} })
            .pipe(map(response => {
                console.log(response);
                return response.body;
            }));
    }

}