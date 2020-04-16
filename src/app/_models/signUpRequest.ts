import { Address } from "./address";

export class SignUpRequest {
    userId: number;
    email: string;
    username: string;
    password: string;
    age: number;
    educationLevel: string;
    gender: string;
    relationShip: string;
    otherRelationShip: string;
    parent: boolean;
    phoneNumber: string;
    studentName: string;
    address: Address

    token: string;

    constructor(
        email: string,
        username: string,
        password: string,
        age: number,
        educationLevel: string,
        gender: string,
        relationShip: string,
        otherRelationShip: string,
        parent: boolean,
        phoneNumber: string,
        studentName: string,
        token: string,
        address: Address
    ) {
        this.email = email;
        this.username = username;
        this.password = password;
        this.age = age;
        this.educationLevel = educationLevel;
        this.gender = gender;
        this.relationShip = relationShip;
        this.otherRelationShip = otherRelationShip;
        this.parent = parent;
        this.phoneNumber = phoneNumber;
        this.studentName = studentName;
        this.token = token;
        this.address = address;
    }
}