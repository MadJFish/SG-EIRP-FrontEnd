import { HttpHeaders } from '@angular/common/http';

export class GloblConstants {
    public static baseUrl: string = "http://sg-eirp-lb-1490246461.ap-southeast-1.elb.amazonaws.com";
    
    public static localUserBaseUrl: string = "http://localhost:8080";
    public static localSchoolBaseUrl: string = "http://localhost:8081";
    public static localTutorBaseUrl: string = "http://localhost:8082";

    public static userUrl: string = "/eirp-user";
    public static tutorUrl: string = "/eirp-tutor";
    public static schoolUrl: string = "/eirp-school";

    /*
    public static apiURL: string = "http://sg-eirp-lb-1490246461.ap-southeast-1.elb.amazonaws.com/eirp-user";
    public static serviceURL: string = "http://sg-eirp-lb-1490246461.ap-southeast-1.elb.amazonaws.com/eirp-tutor/";
    public static schoolURL:string = "http://sg-eirp-lb-1490246461.ap-southeast-1.elb.amazonaws.com/eirp-school";
    */

    // POST
    public static loginURL: string = "/oauth/token";
    public static tutorRegisterationURL: string = "/api/registration/tutor";


    // GET
    public static getCodeByTypeUrl: string = "/api/code/getByType";
    public static TutorAgentListUrl: string = "/api/users/tutor/list";
    public static TutorAgentApprovalUrl: string = "/api/users/tutor/status";
    public static SchDataTaskUrl: string = "/api/govDataTask/all";   

    // Constants
    public static educationLevelCodeType: string = "EducationLevel";
    public static subjectCodeType: string = "Subject";

    public static currentAccessToken = "CurrentAccessToken";

    public static httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
        })
    };

    // Registration
    public static registrationForm = "RegistrationForm";
}