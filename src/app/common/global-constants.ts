import { HttpHeaders } from '@angular/common/http';

export class GloblConstants {
    // URL
    public static baseUrl: string = "http://sg-eirp-lb-1490246461.ap-southeast-1.elb.amazonaws.com";
    
    public static localUserBaseUrl: string = "http://localhost:8080";
    public static localSchoolBaseUrl: string = "http://localhost:8081";
    public static localTutorBaseUrl: string = "http://localhost:8082";

    public static userUrl: string = "/eirp-user";
    public static tutorUrl: string = "/eirp-tutor";
    public static schoolUrl: string = "/eirp-school";

    public static apiURL: string = "http://sg-eirp-lb-1490246461.ap-southeast-1.elb.amazonaws.com/eirp-user";
    public static serviceURL: string = "http://sg-eirp-lb-1490246461.ap-southeast-1.elb.amazonaws.com/eirp-tutor";
    public static schoolURL:string = "http://sg-eirp-lb-1490246461.ap-southeast-1.elb.amazonaws.com/eirp-school";

    public static s3URL: string = "https://eirp-images.s3-ap-southeast-1.amazonaws.com";

    // POST
    public static loginURL: string = "/oauth/token";
    public static tutorRegisterationURL: string = "/api/registration/tutor";
    public static documentUploadURL: string = "/api/upload/document";

    // GET
    public static getCodeByTypeUrl: string = "/api/code/getByType";
    public static getCurrentUser: string = "/api/users/tutor/current";
    public static TutorAgentListURL: string = "/api/users/tutor/list";
    public static TutorAgentApprovalURL: string = "/api/users/tutor/status";
    public static SchDataTaskURL: string = "/api/govDataTask/all";   

    public static tutorAgencyUrl: string = "/api/tutorAgency/get";

    // Common Constants
    public static directory_separator = "/";

    // Constants
    public static educationLevelCodeType: string = "EducationLevel";
    public static subjectCodeType: string = "Subject";

    public static currentAccessToken = "CurrentAccessToken";
    public static currentUserProfile = "CurrentUserProfile";

    public static profileImage = "Profile Image";
    public static userUploadType = "user";

    public static httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
        })
    };

    // Registration
    public static registrationForm = "RegistrationForm";

    // User Status
    public static approvedStatus = "APPROVED";
}