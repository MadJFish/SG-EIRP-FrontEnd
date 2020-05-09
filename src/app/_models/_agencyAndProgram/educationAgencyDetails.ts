import { AddressDto } from "../_common/addressDto";
import { EducationAgencyBranch } from "./educationAgencyBranch";
import { Program } from "./program";
import { Bulletin } from "../_common/bulletin";
import { Teacher } from "../_common/teacher";
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
    hqAddress: AddressDto;
    branches: EducationAgencyBranch[];
    whatsUpNews: Bulletin[];
    teachers: Teacher[];
    leadershipTeam: EducationAgencyLeadership[];
}