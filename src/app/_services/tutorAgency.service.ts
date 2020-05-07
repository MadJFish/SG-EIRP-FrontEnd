import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { TutorAgencyDto } from "app/_models/tutorAgency";
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
        let api = CommonUtils.getServiceAPI(this.allTutorAgenciesURL);
        console.log("api is: " + api);
        
        return this.http.get<TutorAgencyDto[]>(`${api}`)
                .pipe(map((results:any) => {
                    return results.body;
                }));
    }

}