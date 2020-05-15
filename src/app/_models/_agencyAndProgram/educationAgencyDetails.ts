import { AddressDto } from "../_common/addressDto";
import { EducationAgencyBranch } from "./educationAgencyBranch";
import { ProgramDto } from "./programDto";
import { Bulletin } from "../_common/bulletin";
import { Teacher } from "../_common/teacher";
import { EducationAgencyLeadershipDto } from "../index";
import { TutorAgencyDto } from "./tutorAgency";

export class TutorAgencyDetailDto extends TutorAgencyDto {
    programs: ProgramDto[];
    hqAddress: AddressDto;
    branches: EducationAgencyBranch[];
    whatsUpNews: Bulletin[];
    teachers: Teacher[];
    leadershipTeam: EducationAgencyLeadershipDto[];
}