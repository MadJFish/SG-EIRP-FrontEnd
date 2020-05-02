import { Address } from "./address";
import { EducationAgencyBranch } from "./educationAgencyBranch";
import { Program } from "./program";
import { Bulletin } from "./bulletin";
import { Teacher } from "./teacher";
import { EducationAgencyLeadership } from "./educationAgencyLeadership";

export class EducationAgencyDetails {
    id: string;
    name: string;
    imageUrl: string;
    photos: string[];
    vedioUrl: string[];
    promoText: string;
    featured: boolean;
    targetEduLevels: string[];
    phone: string;
    email: string;
    aboutUs: string;
    programes: Program[];
    hqAddress: Address;
    branches: EducationAgencyBranch[];
    whatsUpNews: Bulletin[];
    teachers: Teacher[];
    leadershipTeam: EducationAgencyLeadership[];
}