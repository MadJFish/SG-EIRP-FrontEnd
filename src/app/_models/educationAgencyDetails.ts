import { Address } from "./_common/addressDto";
import { EducationAgencyBranch } from "./_agencyAndProgram/educationAgencyBranch";
import { Program } from "./_agencyAndProgram/program";
import { Bulletin } from "./_common/bulletin";
import { Teacher } from "./_common/teacher";
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