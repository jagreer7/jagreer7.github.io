//HIDDEN STATS ON THE STATS PAGE
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
document.getElementById('statsButton').addEventListener('click', changeStyle);

var flipper2 = 0;
function changeStyle2(){
  var element = document.getElementById("statsButton2");
  flipper2 = flipper2 + 1;
   if (flipper2 % 2 === 0){
    element.style.color = "white";
   }
   else{
     element.style.color = "black";
   }
}
document.getElementById('statsButton2').addEventListener('click', changeStyle2);

var flipper3 = 0;
function changeStyle3(){
  var element = document.getElementById("statsButton3");
  flipper3 = flipper3 + 1;
   if (flipper3 % 2 === 0){
    element.style.color = "white";
   }
   else{
     element.style.color = "black";
   }
}
document.getElementById('statsButton3').addEventListener('click', changeStyle3);

//BUTTON FOR CURSOR
function questionEverything() {
  document.querySelector('html').style.cursor = "help";
}
document.getElementById('questionButton').addEventListener('mouseover', questionEverything);
