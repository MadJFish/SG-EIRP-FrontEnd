import { HttpHeaders } from '@angular/common/http';

export class GloblConstants {
    public static apiURL: string = "http://localhost:8080";
    public static serviceURL: string = "http://localhost:8082";
    
    // POST
    public static loginURL: string = "/oauth/token";


    // GET
    

    public static educationLevelCodeType: string = "EducationLevel";
    public static subjectCodeType: string = "Subject";

    public static currentAccessToken = "CurrentAccessToken";

    public static httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
    };
}