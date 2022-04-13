const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const insertY = ["the soup kitchen", "Disneyland", "the White House"];
const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

var newStory = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
var name = "Bob";

function result() {
  if(customName.value !== '') {
    name = customName.value;
    console.log(name);
  }
  else{
    name = "Bob";
  }

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);
  newStory = "It was 94 fahrenheit outside, so "+xItem+" went for a walk. When they got to "+yItem+", they stared in horror for a few moments, then  "+zItem+". "+name+" saw the whole thing, but was not surprised — "+xItem+" weighs 300 pounds, and it was a hot day.";

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14) + " stone";
    const temperature =  Math.round((94 - 32) * (5/9)) + " centigrade";
    newStory = "It was "+temperature+" outside, so "+xItem+" went for a walk. When they got to "+yItem+", they stared in horror for a few moments, then  "+zItem+". "+name+" saw the whole thing, but was not surprised — "+xItem+" weighs "+weight+", and it was a hot day.";
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}

  randomize.addEventListener('click', result);
