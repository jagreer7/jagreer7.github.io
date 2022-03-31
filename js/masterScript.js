
var flipper = 0;

function changeStyle(){
  var element = document.getElementById("statsButton");
  flipper = flipper + 1;
   if (flipper % 2 === 0){
    element.style.color = "white";
   }
   else{
     element.style.color = "black";
   }
}

const para = document.getElementById("statsButton");

function changeOpacity(){ //Funtion named update name
  para.style.opacity = "0.2"; //Change the text content to player 1 then the name they enter
}

para.addEventListener('click', updateName);
