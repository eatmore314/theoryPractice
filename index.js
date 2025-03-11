import { config } from './config.js'
import Card from './Card.js'
const button = document.querySelector(".button");



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

initialCards.forEach((card)=>{
  document.append(card)
})