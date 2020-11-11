export class CatFact {
    _id: string;
    text: string;

    constructor(data) {
        this._id = data._id;
        this.text = data.text;
    }
}
