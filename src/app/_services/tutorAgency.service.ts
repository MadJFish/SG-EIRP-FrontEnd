import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { TutorAgencyDto } from "app/_models/_agencyAndProgram/tutorAgency";
import { CommonUtils } from "app/common/commonUtils";
import { GloblConstants } from "app/common/global-constants";
import { map } from "rxjs/operators";
import { TutorAgencyDetailDto, EducationAgencyLeadershipDto, ProgramDto } from "app/_models";

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

    getAgencyDetailByAgencyId(id: string): Observable<TutorAgencyDetailDto> {
        let api = CommonUtils.getTutorAPI(GloblConstants.tutorAgencyDetailUrl);
        console.log("api is: " + api);

        return this.http.get<TutorAgencyDetailDto>(`${api}`, { params: {"tutorAgencyId": id} })
            .pipe(map((response:any) => {
                console.log(response);
                return response.body;
            }));
    }

    getProgramByAgencyId(id: string): Observable<ProgramDto> {
        let api = CommonUtils.getTutorAPI(GloblConstants.tutorAgencyDetailUrl);
        console.log("api is: " + api);

        return this.http.get<TutorAgencyDetailDto>(`${api}`, { params: {"tutorAgencyId": id} })
            .pipe(map((response:any) => {
                return response.body.programs[0];
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

    saveAgencyLeadership(agencyLeadershipArray: EducationAgencyLeadershipDto[]): Observable<EducationAgencyLeadershipDto[]> {
        let api = CommonUtils.getTutorAPI(GloblConstants.saveTutorAgencyLeadership);
        console.log("api is: " + api);

        return this.http.post<EducationAgencyLeadershipDto[]>(`${api}`, agencyLeadershipArray)
            .pipe(map((response:any) => {
                console.log("response: " + JSON.stringify(response));
                return response.body;
            }));
    }
}