export class Address {
    blockNo: string;
    latitude: number;
    longitude: number;
    postalCode: string;
    street: string;
    unitNo: string;
    
    constructor() {
        this.blockNo = "";
        this.latitude = 0;
        this.longitude = 0;
        this.postalCode = "";
        this.street = "";
        this.unitNo = "";
    }
}