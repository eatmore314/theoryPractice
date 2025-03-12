export default class Card {
    constructor(data,config,cardSelector){
     this.name = data.name;
     this.age = data.age;
     this.button = config.cardButton;
     this.cardSelector = cardSelector;
    }

    _getTemplate(){
        const cardTemplate = document.querySelector(this.cardSelector).content.querySelector(".cards").cloneNode(true);
        return cardTemplate
    }

    getView(){
        this.element = this._getTemplate();
        this.element.querySelector(".card__name").textContent = this.name;
        this.element.querySelector(".card__age").textContent = this.age;
        console.log(this._element)

        return this.element;
    }

    appendInfo(){

    }
}