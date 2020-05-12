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

        return this.http.get<TutorAgencyDto>(`${api}`, { params: {"tutorAgencyId": id} })
            .pipe(map((response:any) => {
                console.log(response);
                return response.body;
            }));
    }

    saveAgency(tutorAgency: TutorAgencyDto): Observable<TutorAgencyDto> {
        let api = CommonUtils.getTutorAPI(GloblConstants.saveTutorAgencyUrl);
        console.log("api is: " + api);

        return this.http.post<TutorAgencyDto>(`${api}`, tutorAgency)
            .pipe(map((response:any) => {
                console.log("response: " +JSON.stringify(response));
                return response.body;
            }));
    }    
}