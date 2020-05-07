import { DocumentDto } from './index';

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
    subject: string[];
    locations: string[];
}