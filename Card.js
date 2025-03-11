export default class Card {
    constructor(data,cardSelector) {
        this._name = data.name;
        this._age = data.age;
        this._cardSelector = cardSelector;
    }
    _getTemplate(){
        const cardTemplate = document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(true);
        return cardTemplate;
     }

     getView(){
        this._element = this._getTemplate();
        this._element.querySelector(".card")
     }
}