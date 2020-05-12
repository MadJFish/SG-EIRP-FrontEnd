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
    
    setNewValue(data: any) {
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

    setContent(data: any) {
        this.promoText = data.promoText;
        this.phone = data.phone;
        this.email = data.email;
        this.aboutUs = data.aboutUs;
        this.subjects = data.subjects;
        this.targetEduLevels = data.educationLevels;
        this.locations = data.locations;
    }

    copy(agencyDto: TutorAgencyDto) {
        this.id = agencyDto.id;
        this.name = agencyDto.name;
        this.featured = agencyDto.featured;
        this.promoText = agencyDto.promoText;
        this.featured = agencyDto.featured;
        this.targetEduLevels = agencyDto.targetEduLevels;
        this.tutorAgencyDocuments = agencyDto.tutorAgencyDocuments;
        this.phone = agencyDto.phone;
        this.email = agencyDto.email;
        this.aboutUs = agencyDto.aboutUs;
        this.subjects = agencyDto.subjects;
        this.locations = agencyDto.locations;
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
        this.tutorAgent.setNewValue(data);
    }
}