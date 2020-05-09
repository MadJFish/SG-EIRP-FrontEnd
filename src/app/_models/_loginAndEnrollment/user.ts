export class User {
    userId: number;
    username: string;
    password: string;
    age: number;
    educationLevel: string;
    email: string;
    gender: string;
    relationShip: string;
    otherRelationShip: string;
    parent: boolean;
    phoneNumber: string;
    studentName: string;

    token: string;

    constructor(
        username: string,
        password: string,
        age: number,
        educationLevel: string,
        email: string,
        gender: string,
        relationShip: string,
        otherRelationShip: string,
        parent: boolean,
        phoneNumber: string,
        studentName: string,
        token: string
    ) {
        this.username = username;
        this.password = password;
        this.age = age;
        this.educationLevel = educationLevel;
        this.email = email;
        this.gender = gender;
        this.relationShip = relationShip;
        this.otherRelationShip = otherRelationShip;
        this.parent = parent;
        this.phoneNumber = phoneNumber;
        this.studentName = studentName;
        this.token = token;
    }
}