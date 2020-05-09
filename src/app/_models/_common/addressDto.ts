export class AddressDto {
    id: string;
    street: string;
    unitNo: string;
    blockNo: string;
    postalCode: string;
    latitude: number;
    longitude: number;
    
    constructor() {
        this.blockNo = "";
        this.latitude = 0;
        this.longitude = 0;
        this.postalCode = "";
        this.street = "";
        this.unitNo = "";
    }
}