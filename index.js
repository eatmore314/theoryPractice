let inputText = document.querySelector(".input_text");

inputText.addEventListener("keydown", ()=>{
    console.log("You pressed A KEY!")
})

//Adding keystroke to ENTIRE document.
document.addEventListener("keydown", ()=>{
    console.log("No matter what key you press im logged!!")
});

//Logs which key you pressed aswell
document.addEventListener("keydown", function(event) {
    console.log("Key down:", event.key);
  });

  //Keyup: Fires when a key is "released" (only once)
  
