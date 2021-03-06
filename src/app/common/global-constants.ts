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
    public static tempDocumentUploadUrl: string = "/api/upload/temp";
    public static saveTutorAgencyUrl: string = "/api/tutorAgency/post";
    public static saveTutorAgencyLeadership: string = "/api/tutorAgency/details/leadership/post";
    public static saveProgramUrl: string = "/api/program/post";

    // GET
    public static getCodeByTypeUrl: string = "/api/code/getByType";
    public static getCurrentUser: string = "/api/users/tutor/current";
    public static TutorAgentListUrl: string = "/api/users/tutor/list";
    public static TutorAgentApprovalUrl: string = "/api/users/tutor/status";
    public static SchDataTaskUrl: string = "/api/govDataTask/all"; 
    public static SchDataFetchUrl: string = "/api/govDataTask/fetch"; 
    public static tutorAgencyUrl: string = "/api/tutorAgency/get";
    public static tutorAgencyDetailUrl: string = "/api/tutorAgency/details/get";

    // Common Constants
    public static directory_separator = "/";

    // Constants
    public static educationLevelCodeType: string = "EducationLevel";
    public static subjectCodeType: string = "Subject";
    public static locationCodeType: string = "Location";

    public static currentAccessToken: string = "CurrentAccessToken";
    public static currentUserProfile: string = "CurrentUserProfile";
    public static currentUserRole: string = "CurrentUserRole";

    public static profileImage: string = "Profile Image";
    public static photo: string = "Photo";
    public static video: string = "Video";
    public static attachment: string = "Attachment";
    public static userUploadType: string = "user";
    public static agencyUploadType: string = "agency";
    public static programUploadType: string = "program";
    public static leadershipUploadType: string = "leadership";

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