import { HttpHeaders } from '@angular/common/http';

export class GloblConstants {

    //public static apiURL: string = "http://localhost:8080";

    public static apiURL: string = "http://sg-eirp-lb-1490246461.ap-southeast-1.elb.amazonaws.com/eirp-user";
    public static serviceURL: string = "http://sg-eirp-lb-1490246461.ap-southeast-1.elb.amazonaws.com/eirp-tutor/";

    
    
    // POST
    public static loginURL: string = "/oauth/token";


    // GET
    

    public static educationLevelCodeType: string = "EducationLevel";
    public static subjectCodeType: string = "Subject";

    public static currentAccessToken = "CurrentAccessToken";

    public static httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
        })
    };
}