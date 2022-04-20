
function MonoChrome(){
  console.log("MonoChrome");
  document.body.style.backgroundColor = "#fafafa";
  document.querySelector('.headerDiv').style.backgroundColor = "#1e1e1e";
  document.querySelector('.whiteBR').style.backgroundColor = "#1e1e1e";
  document.querySelector('.bigTitle').style.backgroundColor = "#1e1e1e";
  document.querySelector('h1').style.backgroundColor = "#1e1e1e";
  document.querySelector('h2').style.color = "#1e1e1e";
  document.querySelector('.accessabilityFlex').style.backgroundColor = "#1e1e1e";
  document.querySelector('.underlineTitle').style.textShadow = "2px 2px #1e1e1e, 2px -2px #1e1e1e, -2px 2px #1e1e1e, -2px -2px #1e1e1e";
  const flexes = document.querySelectorAll('.flex');
  flexes.forEach(thing => {thing.style.backgroundColor = "#1e1e1e";});
  const children = document.querySelectorAll('.child');
  children.forEach(thing => {thing.style.backgroundColor = "#1e1e1e";});
  const accessChild = document.querySelectorAll('.accessChild');
  accessChild.forEach(thing => {thing.style.backgroundColor = "#1e1e1e";});

  if(document.title === "Homepage Jackson Greer"){
    document.querySelector("img").src="img/StairsBlue1_JG-MONO.JPG";
  }
  if(document.title === "About Me Jackson Greer"){
    document.querySelector('.mediaPostButton').style.backgroundColor = "#1e1e1e";
    document.querySelector("img").src="img/Rock_JG-MONO.JPG";
  }
  if(document.title === "Contact Me"){
    const contactButtons = document.querySelectorAll('.contactChild');
    contactButtons.forEach(thing => {thing.style.backgroundColor = "#1e1e1e";});
    document.querySelector("img").src="img/Stairs_JG-MONO.JPG";
  }
  if(document.title === "Design Foundations Jackson Greer"){
    const contactButtons = document.querySelectorAll('.contactChild');
    contactButtons.forEach(thing => {thing.style.backgroundColor = "#1e1e1e";});
    document.querySelector("img").src="img/ColorZines-modified.png";
  }
  if(document.title === "Image Jackson Greer"){
    const contactButtons = document.querySelectorAll('.contactChild');
    contactButtons.forEach(thing => {thing.style.backgroundColor = "#1e1e1e";});
    document.querySelector("img").src="img/Adarkplace-Good-modified.JPG";
  }
  if(document.title === "Web Jackson Greer"){
    const contactButtons = document.querySelectorAll('.contactChild');
    contactButtons.forEach(thing => {thing.style.backgroundColor = "#1e1e1e";});
    document.querySelector("img").src="img/Chess-modified.png";
  }
  if(document.title === "Works Jackson Greer"){
    const postButtons = document.querySelectorAll('.mediaPostButton');
    postButtons.forEach(thing => {thing.style.backgroundColor = "#1e1e1e";});
    document.querySelector(".chess").src="img/Chess-modified.png";
    document.querySelector(".plant").src="img/PlantVR-modified.jpg";
    document.querySelector(".space").src="img/SpaceJam-modified.png";
  }
}

document.querySelector('.MonoChrome').addEventListener('click', MonoChrome);

function HighContrastD(){
  console.log("HighContrastD");
}

document.querySelector('.HighContrastD').addEventListener('click', HighContrastD);

function HighContrastL(){
  console.log("HighContrastL");
}

document.querySelector('.HighContrastL').addEventListener('click', HighContrastL);

function Classic(){
  console.log("Classic");
}

document.querySelector('.Classic').addEventListener('click', Classic);
