export class EducationAgencyLeadershipDto {
    id: string;
    agencyId: string;
    imageUrl: string;
    name: string;
    designation: string;
    description: string;

    copy(leadershipDto: EducationAgencyLeadershipDto) {
        this.id = leadershipDto.id;
        this.agencyId = leadershipDto.agencyId;
        this.imageUrl = leadershipDto.imageUrl;
        this.name = leadershipDto.name;
        this.designation = leadershipDto.designation;
        this.description = leadershipDto.description;
    }

    setContent(data: any, agencyId: string, imageUrl: string) {
        this.agencyId = agencyId;
        this.imageUrl = imageUrl;
        this.name = data.name;
        this.designation = data.designation;
        this.description = data.description;
    }
}