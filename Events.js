export default class Events {
    constructor(config,loopThroughData) {
     this.button = document.querySelector(config.cardButton);
     this.loopThroughData = loopThroughData;
    }

    setEventListener(){
        console.log("testing")
        this.button.addEventListener("click",this.loopThroughData)
    }
}