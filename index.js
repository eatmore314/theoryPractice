import { config } from './config.js'
import Card from './Card.js'
import Events from './Events.js'
const button = document.querySelector(".button");
const cardSelector = "#card-template"



//data 
const initialCards = [
  {
    name: "Meshach Jacobs",
    age: 30
  },
  {
    name: "Trent Pratt",
    age: 20
  },
  {
    name: "Malik Benjamin",
    age: 34
  },
  {
    name: "Preston francess",
    age: 40
  } 
]


const newButton = new Events(config,loopThroughData);
newButton.setEventListener();

function createCard(data){
const newCard = new Card(data,config,cardSelector);
const cardElement = newCard.getView();
document.body.append(cardElement);

}

  

  

function loopThroughData() {
console.log("test");
initialCards.forEach((data)=>{
  createCard(data);
})}


//initialCards.forEach((card)=>{document.append(card)})