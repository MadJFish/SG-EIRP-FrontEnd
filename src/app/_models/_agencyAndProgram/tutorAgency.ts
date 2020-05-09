import { DocumentDto } from '../index';

export class TutorAgencyDto {
    id: string;
    name: string;
    promoText: string;
    featured: boolean;
    targetEduLevels: string[];
    tutorAgencyDocuments: DocumentDto[];
    phone: string;
    email: string;
    aboutUs: string;
    subjects: string[];
    locations: string[];
    
    setValue(data: any) {
        this.name = data.agencyName;
        this.promoText = "";
        this.featured = false;
        this.targetEduLevels = [];
        this.tutorAgencyDocuments = [];
        this.phone = data.phone;
        this.email = "";
        this.aboutUs = "";
        this.subjects = [];
        this.locations = [];
    }
}

export class TutorEnrollRequestDto {
    username: string;
    password: string;
    email: string;
    firstName: string;
    lastName: string;
    tutorAgent: TutorAgencyDto;

    setValue(data: any) {
        this.username = data.username;
        this.password = data.password;
        this.email = data.email;
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.tutorAgent = new TutorAgencyDto();
        this.tutorAgent.setValue(data);
    }
}