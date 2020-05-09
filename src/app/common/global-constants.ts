import { HttpHeaders } from '@angular/common/http';

export class GloblConstants {
    public static baseUrl: string = "http://sg-eirp-lb-1490246461.ap-southeast-1.elb.amazonaws.com";
    public static localUserBaseUrl: string = "http://localhost:8080";

    public static userUrl: string = "/eirp-user";
    public static tutorUrl: string = "/eirp-tutor";
    public static localTutorBaseUrl: string = "http://localhost:8082";
    
    // POST
    public static loginURL: string = "/oauth/token";
    public static tutorRegisterationURL: string = "/api/registration/tutor";


    // GET
    public static getCodeByTypeUrl: string = "/api/code/getByType";
    

    public static educationLevelCodeType: string = "EducationLevel";
    public static subjectCodeType: string = "Subject";

    public static currentAccessToken = "CurrentAccessToken";

    public static httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
    };

    // Registration
    public static registrationForm = "RegistrationForm";
}