const para = document.querySelector('p'); //Selecting all things in the document with the 'p' tag (paragraphs) and set them to the para constant

function updateName(){ //Funtion named update name
  const name = prompt('Enter a New Name'); //Promt the user to enter a name
  para.textContent = `Player 1: ${name}`; //Change the text content to player 1 then the name they enter
}

para.addEventListener('click', updateName);//Wait for the user to click any paragraph (para) and execute updateName




let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
  let myName = prompt('Please enter your name');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if (!localStorage.getItem('name')){
  setUserName();
}
else{
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function (){
  setUserName();
}
