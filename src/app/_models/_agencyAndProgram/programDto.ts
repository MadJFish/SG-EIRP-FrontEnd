import { ProgramSessionDto } from "./ProgramSessionDto";

export class ProgramDto {
    programId: string;
    agencyId: string;
    programName: string;
    programDescription: string;
    programDetailParagraph: string;
    featured: boolean;
    programDocuments: string[];
    subject: string;
    forEducationLevel: string;
    forMinAge: number;
    forMaxAge: number;
    feeType: string;
    fee: number;
    feeCurrency: string;
    locations: string;
    sessions: ProgramSessionDto[];
    trainerId: string;
    programImage: string;

    ProgramDto() {
        this.initialize();
    }

    initialize() {
        this.agencyId = "";
        this.programName = "";
        this.programDescription = "";
        this.programDetailParagraph = "";
        this.featured = false;
        this.programDocuments = [];
        this.subject = "";
        this.forEducationLevel = "";
        this.forMinAge = 0;
        this.forMaxAge = 0;
        this.feeType = "";
        this.fee = 0;
        this.feeCurrency = "SGD";
        this.locations = "";
        this.sessions = [];
        this.trainerId = "";
        this.programImage = "https://eirp-images.s3-ap-southeast-1.amazonaws.com/common/f0e27426-06ca-4aac-bdfe-e314dcb56acf/school.png";
    }

    copy(programDto: ProgramDto){
        this.programId = programDto.programId;
        this.agencyId = programDto.agencyId;
        this.programName = programDto.programName;
        this.programDescription = programDto.programDescription;
        this.programDetailParagraph = programDto.programDetailParagraph;
        this.featured = programDto.featured;
        this.programDocuments = programDto.programDocuments;
        this.subject = programDto.subject;
        this.forEducationLevel = programDto.forEducationLevel;
        this.forMinAge = programDto.forMinAge;
        this.forMaxAge = programDto.forMaxAge;
        this.feeType = programDto.feeType;
        this.fee = programDto.fee;
        this.feeCurrency = programDto.feeCurrency;
        this.locations = programDto.locations;
        this.sessions = programDto.sessions;
        this.trainerId = programDto.trainerId;
    }

    setContent(data: any, agencyId: string) {
        this.agencyId = agencyId;
        this.programName = data.name;
        this.subject = data.subject;
        this.forEducationLevel = data.forEducationLevel;
    }

    setDefaultImage() {
        this.programImage = "https://eirp-images.s3-ap-southeast-1.amazonaws.com/common/f0e27426-06ca-4aac-bdfe-e314dcb56acf/school.png";
    }
}