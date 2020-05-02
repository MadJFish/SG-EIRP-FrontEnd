export class Code {
    id: string;
    type: string;
    value: string;
    description: string;
    isChecked: boolean;

    constructor () {
        this.isChecked = false;
    }
}