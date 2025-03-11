export default class Card {
    constructor(data,config){
     this.name = data.name;
     this.age = data.age;
     this.button = config.cardButton;
    }

    setEventListener(){
    this.button.addEventListener("click",()=>{
        
    })
    }

    appendInfo(){

    }
}