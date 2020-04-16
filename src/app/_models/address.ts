export class Address {
    blockNo: string;
    latitude: number;
    longitude: number;
    postalCode: string;
    street: string;
    unitNo: string;
    
    constructor(
        blockNo: string,
        latitude: number,
        longitude: number,
        postalCode: string,
        street: string,
        unitNo: string
    ) {
        this.blockNo = blockNo;
        this.latitude = latitude;
        this.longitude = longitude;
        this.postalCode = postalCode;
        this.street = street;
        this.unitNo = unitNo;
    }
}