import { HttpHeaders } from '@angular/common/http';

export class GloblConstants {
    public static apiURL: string = "http://localhost:8080/api/";

    public static educationLevelCodeType: string = "EducationLevel";
    public static subjectCodeType: string = "Subject";

    public static httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          // 'Authorization': 'my-auth-token'
        })
    };
}