import { Address } from "./address";

export class SignUpRequest {
    userId: string;
    username: string;
    password: string;
    email: string;
    educationLevel: string;
    parent: boolean;
    gender: string;
    phoneNumber: string;
    age: number;
    studentName: string;
    relationShip: string;
    otherRelationShip: string;
    address: Address
    token: string;

    constructor() {
        this.userId = "";
        this.username = "";
        this.password = "";
        this.email = "";
        this.educationLevel = "";
        this.parent = false;
        this.gender = "MALE";
        this.phoneNumber = "";
        this.age = 0;
        this.studentName = "";
        this.relationShip = "";
        this.otherRelationShip = "";
        this.address = new Address();
        this.token = "";
    }
}