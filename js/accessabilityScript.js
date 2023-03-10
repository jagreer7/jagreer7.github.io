
function MonoChrome(){
  console.log("MonoChrome");
  document.body.style.backgroundColor = "#fafafa";
  document.querySelector('.headerDiv').style.backgroundColor = "#1e1e1e";
  document.querySelector('.whiteBR').style.backgroundColor = "#1e1e1e";
  document.querySelector('.bigTitle').style.backgroundColor = "#1e1e1e";
  document.querySelector('h1').style.backgroundColor = "#1e1e1e";
  document.querySelector('h1').style.color = "white";
  document.querySelector('h2').style.color = "#1e1e1e";
  document.querySelector('.dropbtn').style.backgroundColor = "#1e1e1e";
  const accessFlex = document.querySelectorAll('.accessabilityFlex');
  accessFlex.forEach(thing => {thing.style.borderTop  = "thick solid #1e1e1e"; thing.style.backgroundColor = "#1e1e1e";});
  document.querySelector('.underlineTitle').style.textShadow = "2px 2px #1e1e1e, 2px -2px #1e1e1e, -2px 2px #1e1e1e, -2px -2px #1e1e1e";
  const imageBoder = document.querySelectorAll('img');
  imageBoder.forEach(thing => {thing.style.border  = "thin solid black";});
  const underlines = document.querySelectorAll('.underline');
  underlines.forEach(thing => {thing.style.textShadow = "2px 2px #fafafa, 2px -2px #fafafa, -2px 2px #fafafa, -2px -2px #fafafa";});
  const flexes = document.querySelectorAll('.flex');
  flexes.forEach(thing => {thing.style.backgroundColor = "#1e1e1e"; thing.style.borderBottom = "thick solid #1e1e1e";});
  const children = document.querySelectorAll('.child');
  children.forEach(thing => {thing.style.backgroundColor = "#1e1e1e"; thing.style.color = 'white';});
  const accessChild = document.querySelectorAll('.accessChild');
  accessChild.forEach(thing => {thing.style.backgroundColor = "white"; thing.style.color = 'black'; thing.style.border = '1px solid white';});
  const aTags = document.querySelectorAll('a');
  aTags.forEach(thing => {thing.style.color = 'white';});
  const pTags = document.querySelectorAll('p');
  pTags.forEach(thing => {thing.style.color = "black";});
  const h4Tags = document.querySelectorAll('h4');
  h4Tags.forEach(thing => {thing.style.color = "black";});
  const bigTitles = document.querySelectorAll('.bigTitle');
  bigTitles.forEach(thing => {thing.style.color = "white";});

  if(document.title === "Homepage Jackson Greer"){
    document.querySelector("img").src="img/StairsBlue1_JG-MONO.JPG";
  }
  if(document.title === "About Me Jackson Greer"){
    document.querySelector('.mediaPostButton').style.backgroundColor = "#1e1e1e";
    document.querySelector('.mediaPostButton').style.color = "white";
    document.querySelector("img").src="img/Rock_JG-MONO.JPG";
  }
  if(document.title === "Contact Me"){
    const contactButtons = document.querySelectorAll('.contactChild');
    contactButtons.forEach(thing => {thing.style.backgroundColor = "#1e1e1e"; thing.style.color = "white";});
    document.querySelector("img").src="img/Stairs_JG-MONO.JPG";
  }
  if(document.title === "Design Foundations Jackson Greer"){
    const contactButtons = document.querySelectorAll('.contactChild');
    contactButtons.forEach(thing => {thing.style.backgroundColor = "#1e1e1e"; thing.style.color = "white";});
    document.querySelector("img").src="img/ColorZines-modified.png";
  }
  if(document.title === "Image Jackson Greer"){
    const contactButtons = document.querySelectorAll('.contactChild');
    contactButtons.forEach(thing => {thing.style.backgroundColor = "#1e1e1e"; thing.style.color = "white";});
    document.querySelector("img").src="img/Adarkplace-Good-modified.JPG";
  }
  if(document.title === "Web Jackson Greer"){
    const contactButtons = document.querySelectorAll('.contactChild');
    contactButtons.forEach(thing => {thing.style.backgroundColor = "#1e1e1e"; thing.style.color = "white";});
    document.querySelector("img").src="img/Chess-modified.png";
  }
  if(document.title === "Object Jackson Greer"){
    const contactButtons = document.querySelectorAll('.contactChild');
    contactButtons.forEach(thing => {thing.style.backgroundColor = "#1e1e1e"; thing.style.color = "white";});
    document.querySelector("img").src="img/ObjectThumbnail-modified.jpg";
  }
  if(document.title === "Form Jackson Greer"){
    const contactButtons = document.querySelectorAll('.contactChild');
    contactButtons.forEach(thing => {thing.style.backgroundColor = "#1e1e1e"; thing.style.color = "white";});
    document.querySelector("img").src="img/FormThumbnail-modified.jpg";
  }
  if(document.title === "Text Jackson Greer"){
    const contactButtons = document.querySelectorAll('.contactChild');
    contactButtons.forEach(thing => {thing.style.backgroundColor = "#1e1e1e"; thing.style.color = "white";});
    document.querySelector("img").src="img/TextThumbnail-modified.png";
  }
  if(document.title === "Works Jackson Greer"){
    const postButtons = document.querySelectorAll('.mediaPostButton');
    postButtons.forEach(thing => {thing.style.backgroundColor = "#1e1e1e"; thing.style.color = "white";});
    document.querySelector(".chess").src="img/Chess-modified.png";
    document.querySelector(".plant").src="img/PlantVR-modified.jpg";
    document.querySelector(".space").src="img/SpaceJam-modified.png";
    document.querySelector(".drill").src="img/FormThumbnail-modified.jpg";
    document.querySelector(".circuit").src="img/ObjectThumbnail-modified.jpg";
    document.querySelector(".logotype").src="img/TextThumbnail-modified.png";
  }
}

const mcButtons = document.querySelectorAll('.MonoChrome');
for (let i = 0; i < mcButtons.length; i++){
  mcButtons[i].addEventListener('click', MonoChrome);
}

function HighContrastD(){
  console.log("HighContrastD");
  document.body.style.backgroundColor = "#000000 ";
  document.querySelector('.headerDiv').style.backgroundColor = "#000000 ";
  document.querySelector('.whiteBR').style.backgroundColor = "#000000 ";
  document.querySelector('.bigTitle').style.backgroundColor = "#000000 ";
  document.querySelector('h1').style.backgroundColor = "#000000 ";
  document.querySelector('h1').style.color = "white";
  document.querySelector('h2').style.color = "white";
  document.querySelector('.dropbtn').style.backgroundColor = "#000000 ";
  const accessFlex = document.querySelectorAll('.accessabilityFlex');
  accessFlex.forEach(thing => {thing.style.borderTop  = "thick solid #f2ff00"; thing.style.backgroundColor = "#000000 ";});
  document.querySelector('.underlineTitle').style.textShadow = "2px 2px #000000 , 2px -2px #000000 , -2px 2px #000000 , -2px -2px #000000 ";
  const imageBoder = document.querySelectorAll('img');
  imageBoder.forEach(thing => {thing.style.border  = "thick solid #f2ff00";});
  const underlines = document.querySelectorAll('.underline');
  underlines.forEach(thing => {thing.style.textShadow = "2px 2px #000000 , 2px -2px #000000 , -2px 2px #000000 , -2px -2px #000000 ";});
  const flexes = document.querySelectorAll('.flex');
  flexes.forEach(thing => {thing.style.backgroundColor = "#000000 "; thing.style.borderBottom = "thick solid #f2ff00";});
  const children = document.querySelectorAll('.child');
  children.forEach(thing => {thing.style.backgroundColor = "#000000 "; thing.style.color = 'white';});
  const accessChild = document.querySelectorAll('.accessChild');
  accessChild.forEach(thing => {thing.style.backgroundColor = "#f2ff00"; thing.style.color = 'black'; thing.style.border = '1px solid #f2ff00';});
  const aTags = document.querySelectorAll('a');
  aTags.forEach(thing => {thing.style.color = 'white';});
  const pTags = document.querySelectorAll('p');
  pTags.forEach(thing => {thing.style.color = "white";});
  const h4Tags = document.querySelectorAll('h4');
  h4Tags.forEach(thing => {thing.style.color = "white";});
  const bigTitles = document.querySelectorAll('.bigTitle');
  bigTitles.forEach(thing => {thing.style.color = "white";});

  if(document.title === "Homepage Jackson Greer"){
    document.querySelector("img").src = "img/StairsBlue1_JG.JPG";

  }
  if(document.title === "About Me Jackson Greer"){
    document.querySelector('.mediaPostButton').style.backgroundColor = "yellow";
    document.querySelector('.mediaPostButton').style.color = "black";
    document.querySelector("img").src="img/Rock_JG.JPG";
  }
  if(document.title === "Contact Me"){
    const contactButtons = document.querySelectorAll('.contactChild');
    contactButtons.forEach(thing => {thing.style.backgroundColor = "yellow";  thing.style.color = "black";});
    document.querySelector("img").src="img/Stairs_JG.JPG";
  }
  if(document.title === "Design Foundations Jackson Greer"){
    const contactButtons = document.querySelectorAll('.contactChild');
    contactButtons.forEach(thing => {thing.style.backgroundColor = "yellow"; thing.style.color = "black";});
    document.querySelector("img").src="img/ColorZines.png";
  }
  if(document.title === "Image Jackson Greer"){
    const contactButtons = document.querySelectorAll('.contactChild');
    contactButtons.forEach(thing => {thing.style.backgroundColor = "yellow"; thing.style.color = "black";});
    document.querySelector("img").src="img/Adarkplace-Good.JPG";
  }
  if(document.title === "Web Jackson Greer"){
    const contactButtons = document.querySelectorAll('.contactChild');
    contactButtons.forEach(thing => {thing.style.backgroundColor = "yellow"; thing.style.color = "black";});
    document.querySelector("img").src="img/Chess.png";
  }
  if(document.title === "Form Jackson Greer"){
    const contactButtons = document.querySelectorAll('.contactChild');
    contactButtons.forEach(thing => {thing.style.backgroundColor = "yellow"; thing.style.color = "black";});
    document.querySelector("img").src="img/FormThumbnail.jpg";
  }
  if(document.title === "Object Jackson Greer"){
    const contactButtons = document.querySelectorAll('.contactChild');
    contactButtons.forEach(thing => {thing.style.backgroundColor = "yellow"; thing.style.color = "black";});
    document.querySelector("img").src="img/ObjectThumbnail.jpg";
  }
  if(document.title === "Text Jackson Greer"){
    const contactButtons = document.querySelectorAll('.contactChild');
    contactButtons.forEach(thing => {thing.style.backgroundColor = "yellow"; thing.style.color = "black";});
    document.querySelector("img").src="img/TextThumbnail.png";
  }
  if(document.title === "Works Jackson Greer"){
    const postButtons = document.querySelectorAll('.mediaPostButton');
    postButtons.forEach(thing => {thing.style.backgroundColor = "yellow"; thing.style.color = "black";});
    document.querySelector(".chess").src="img/Chess.png";
    document.querySelector(".plant").src="img/PlantVR.jpg";
    document.querySelector(".space").src="img/SpaceJam.png";
    document.querySelector(".drill").src="img/FormThumbnail.jpg";
    document.querySelector(".circuit").src="img/ObjectThumbnail.jpg";
    document.querySelector(".logotype").src="img/TextThumbnail.png";
  }
}
const hcdButtons = document.querySelectorAll('.HighContrastD');
for (let i = 0; i < hcdButtons.length; i++){
  hcdButtons[i].addEventListener('click', HighContrastD);
}

function HighContrastL(){
  console.log("HighContrastL");
    document.body.style.backgroundColor = "#ffffff";
    document.querySelector('.headerDiv').style.backgroundColor = "#ffffff";
    document.querySelector('.whiteBR').style.backgroundColor = "#ffffff";
    document.querySelector('.bigTitle').style.backgroundColor = "#ffffff";
    document.querySelector('h1').style.backgroundColor = "#ffffff";
    document.querySelector('h1').style.color = "black";
    document.querySelector('h2').style.color = "black";
    document.querySelector('.dropbtn').style.backgroundColor = "#ffffff";
    const accessFlex = document.querySelectorAll('.accessabilityFlex');
    accessFlex.forEach(thing => {thing.style.borderTop  = "thick solid #44005e"; thing.style.backgroundColor = "#ffffff";});
    document.querySelector('.underlineTitle').style.textShadow = "2px 2px #ffffff, 2px -2px #ffffff, -2px 2px #ffffff, -2px -2px #ffffff";
    const imageBoder = document.querySelectorAll('img');
    imageBoder.forEach(thing => {thing.style.border  = "thick solid #44005e";});
    const underlines = document.querySelectorAll('.underline');
    underlines.forEach(thing => {thing.style.textShadow = "2px 2px #ffffff, 2px -2px #ffffff, -2px 2px #ffffff, -2px -2px #ffffff";});
    const flexes = document.querySelectorAll('.flex');
    flexes.forEach(thing => {thing.style.backgroundColor = "#ffffff"; thing.style.borderBottom = "thick solid #44005e";});
    const children = document.querySelectorAll('.child');
    children.forEach(thing => {thing.style.backgroundColor = "#ffffff"; thing.style.color = 'black';});
    const accessChild = document.querySelectorAll('.accessChild');
    accessChild.forEach(thing => {thing.style.backgroundColor = "#44005e"; thing.style.color = 'white'; thing.style.border = '1px solid #44005e';});
    const aTags = document.querySelectorAll('a');
    aTags.forEach(thing => {thing.style.color = 'black';});
    const pTags = document.querySelectorAll('p');
    pTags.forEach(thing => {thing.style.color = "black";});
    const h4Tags = document.querySelectorAll('h4');
    h4Tags.forEach(thing => {thing.style.color = "black";});
    const bigTitles = document.querySelectorAll('.bigTitle');
    bigTitles.forEach(thing => {thing.style.color = "black";});

    if(document.title === "Homepage Jackson Greer"){
      document.querySelector("img").src = "img/StairsBlue1_JG.JPG";

    }
    if(document.title === "About Me Jackson Greer"){
      document.querySelector('.mediaPostButton').style.backgroundColor = "#44005e";
      document.querySelector('.mediaPostButton').style.color = "white";
      document.querySelector("img").src="img/Rock_JG.JPG";
    }
    if(document.title === "Contact Me"){
      const contactButtons = document.querySelectorAll('.contactChild');
      contactButtons.forEach(thing => {thing.style.backgroundColor = "#44005e";  thing.style.color = "white";});
      document.querySelector("img").src="img/Stairs_JG.JPG";
    }
    if(document.title === "Design Foundations Jackson Greer"){
      const contactButtons = document.querySelectorAll('.contactChild');
      contactButtons.forEach(thing => {thing.style.backgroundColor = "#44005e"; thing.style.color = "white";});
      document.querySelector("img").src="img/ColorZines.png";
    }
    if(document.title === "Image Jackson Greer"){
      const contactButtons = document.querySelectorAll('.contactChild');
      contactButtons.forEach(thing => {thing.style.backgroundColor = "#44005e"; thing.style.color = "white";});
      document.querySelector("img").src="img/Adarkplace-Good.JPG";
    }
    if(document.title === "Web Jackson Greer"){
      const contactButtons = document.querySelectorAll('.contactChild');
      contactButtons.forEach(thing => {thing.style.backgroundColor = "#44005e"; thing.style.color = "white";});
      document.querySelector("img").src="img/Chess.png";
    }
    if(document.title === "Form Jackson Greer"){
      const contactButtons = document.querySelectorAll('.contactChild');
      contactButtons.forEach(thing => {thing.style.backgroundColor = "#44005e"; thing.style.color = "white";});
      document.querySelector("img").src="img/FormThumbnail.jpg";
    }
    if(document.title === "Object Jackson Greer"){
      const contactButtons = document.querySelectorAll('.contactChild');
      contactButtons.forEach(thing => {thing.style.backgroundColor = "#44005e"; thing.style.color = "white";});
      document.querySelector("img").src="img/ObjectThumbnail.jpg";
    }
    if(document.title === "Text Jackson Greer"){
      const contactButtons = document.querySelectorAll('.contactChild');
      contactButtons.forEach(thing => {thing.style.backgroundColor = "#44005e"; thing.style.color = "white";});
      document.querySelector("img").src="img/TextThumbnail.png";
    }
    if(document.title === "Works Jackson Greer"){
      const postButtons = document.querySelectorAll('.mediaPostButton');
      postButtons.forEach(thing => {thing.style.backgroundColor = "#44005e"; thing.style.color = "white";});
      document.querySelector(".chess").src="img/Chess.png";
      document.querySelector(".plant").src="img/PlantVR.jpg";
      document.querySelector(".space").src="img/SpaceJam.png";
      document.querySelector(".drill").src="img/FormThumbnail.jpg";
      document.querySelector(".circuit").src="img/ObjectThumbnail.jpg";
      document.querySelector(".logotype").src="img/TextThumbnail.png";
    }
}

const hclButtons = document.querySelectorAll('.HighContrastL');
for (let i = 0; i < hclButtons.length; i++){
  hclButtons[i].addEventListener('click', HighContrastL);
}


function classicFunction(){
  console.log("Classic");
  document.body.style.backgroundColor = "#E9F7FA";
  document.querySelector('.headerDiv').style.backgroundColor = "#225C73 ";
  document.querySelector('.whiteBR').style.backgroundColor = "#225C73 ";
  document.querySelector('.bigTitle').style.backgroundColor = "#225C73 ";
  document.querySelector('h1').style.backgroundColor = "#225C73 ";
  document.querySelector('h1').style.color = "white";
  document.querySelector('h2').style.color = "black";
  document.querySelector('.dropbtn').style.backgroundColor = "#225C73 ";
  const accessFlex = document.querySelectorAll('.accessabilityFlex');
  accessFlex.forEach(thing => {thing.style.borderTop  = "thick solid #225C73 "; thing.style.backgroundColor = "#225C73 ";});
  document.querySelector('.underlineTitle').style.textShadow = "2px 2px #225C73 , 2px -2px #225C73 , -2px 2px #225C73 , -2px -2px #225C73 ";
  const imageBoder = document.querySelectorAll('img');
  imageBoder.forEach(thing => {thing.style.border  = "thin solid black";});
  const underlines = document.querySelectorAll('.underline');
  underlines.forEach(thing => {thing.style.textShadow = "2px 2px #E9F7FA, 2px -2px #E9F7FA, -2px 2px #E9F7FA, -2px -2px #E9F7FA";});
  const flexes = document.querySelectorAll('.flex');
  flexes.forEach(thing => {thing.style.backgroundColor = "#225C73 "; thing.style.borderBottom = "thick solid #225C73 ";});
  const children = document.querySelectorAll('.child');
  children.forEach(thing => {thing.style.backgroundColor = "#225C73 "; thing.style.color = 'black';});
  const accessChild = document.querySelectorAll('.accessChild');
  accessChild.forEach(thing => {thing.style.backgroundColor = "#4B8CA6"; thing.style.color = 'white'; thing.style.border = '1px solid #4B8CA6';});
  const aTags = document.querySelectorAll('a');
  aTags.forEach(thing => {thing.style.color = 'white';});
  const pTags = document.querySelectorAll('p');
  pTags.forEach(thing => {thing.style.color = "black";});
  const h4Tags = document.querySelectorAll('h4');
  h4Tags.forEach(thing => {thing.style.color = "black";});
  const bigTitles = document.querySelectorAll('.bigTitle');
  bigTitles.forEach(thing => {thing.style.color = "white";});

  if(document.title === "Homepage Jackson Greer"){
    document.querySelector("img").src="img/StairsBlue1_JG.JPG";
  }
  if(document.title === "About Me Jackson Greer"){
    document.querySelector('.mediaPostButton').style.backgroundColor = "#225C73 ";
    document.querySelector('.mediaPostButton').style.color = "white";
    document.querySelector("img").src="img/Rock_JG.JPG";
  }
  if(document.title === "Contact Me"){
    const contactButtons = document.querySelectorAll('.contactChild');
    contactButtons.forEach(thing => {thing.style.backgroundColor = "#225C73 ";  thing.style.color = "white";});
    document.querySelector("img").src="img/Stairs_JG.JPG";
  }
  if(document.title === "Design Foundations Jackson Greer"){
    const contactButtons = document.querySelectorAll('.contactChild');
    contactButtons.forEach(thing => {thing.style.backgroundColor = "#225C73 "; thing.style.color = "white";});
    document.querySelector("img").src="img/ColorZines.png";
  }
  if(document.title === "Image Jackson Greer"){
    const contactButtons = document.querySelectorAll('.contactChild');
    contactButtons.forEach(thing => {thing.style.backgroundColor = "#225C73 "; thing.style.color = "white";});
    document.querySelector("img").src="img/Adarkplace-Good.JPG";
  }
  if(document.title === "Web Jackson Greer"){
    const contactButtons = document.querySelectorAll('.contactChild');
    contactButtons.forEach(thing => {thing.style.backgroundColor = "#225C73 "; thing.style.color = "white";});
    document.querySelector("img").src="img/Chess.png";
  }
  if(document.title === "Form Jackson Greer"){
    const contactButtons = document.querySelectorAll('.contactChild');
    contactButtons.forEach(thing => {thing.style.backgroundColor = "#225C73"; thing.style.color = "white";});
    document.querySelector("img").src="img/FormThumbnail.jpg";
  }
  if(document.title === "Object Jackson Greer"){
    const contactButtons = document.querySelectorAll('.contactChild');
    contactButtons.forEach(thing => {thing.style.backgroundColor = "#225C73"; thing.style.color = "white";});
    document.querySelector("img").src="img/ObjectThumbnail.jpg";
  }
  if(document.title === "Text Jackson Greer"){
    const contactButtons = document.querySelectorAll('.contactChild');
    contactButtons.forEach(thing => {thing.style.backgroundColor = "#225C73"; thing.style.color = "white";});
    document.querySelector("img").src="img/TextThumbnail.png";
  }
  if(document.title === "Works Jackson Greer"){
    const postButtons = document.querySelectorAll('.mediaPostButton');
    postButtons.forEach(thing => {thing.style.backgroundColor = "#225C73 "; thing.style.color = "white";});
    document.querySelector(".chess").src="img/Chess.png";
    document.querySelector(".plant").src="img/PlantVR.jpg";
    document.querySelector(".space").src="img/SpaceJam.png";
    document.querySelector(".drill").src="img/FormThumbnail.jpg";
    document.querySelector(".circuit").src="img/ObjectThumbnail.jpg";
    document.querySelector(".logotype").src="img/TextThumbnail.png";
  }
}

const classicButtons = document.querySelectorAll('.Classic');
for (let i = 0; i < classicButtons.length; i++){
  classicButtons[i].addEventListener('click', classicFunction);
}



// -------- TITLE ONLY SLIDES IN ONCE --------
window.addEventListener(('load'), () => { //Listen for the page to load
  if(document.querySelector('.slide-in') !== null) { //If the tag with the class slideInOnce exists...
    window.sessionStorage.setItem('Heading', 'displayed'); //Put the term "displayed" for heading in system storage
  }
});

if (window.sessionStorage.getItem('Heading')) {
 document.querySelector('.slideInOnce').classList.remove('slide-in'); //Remove the slide-in class if the "heading" is in system storage
}
// -------------------------------------------
