const btn = document.querySelector('button');
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const WIDTH = document.documentElement.clientWidth;
const HEIGHT =  document.documentElement.clientHeight;

canvas.width = WIDTH;
canvas.height = HEIGHT;

function random(number) {
  return Math.floor(Math.random()*number);
}

function draw() {
  ctx.clearRect(0,0,WIDTH,HEIGHT);
  for (let i = 0; i < 1000; i++) {
    ctx.beginPath();
    ctx.fillStyle = "rgba(" + random(255) + ", " + random(255) + ", " + random(255) + ", 0.5)";
    ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
    ctx.fill();
  }
}
let abort = 0;
function resetAbort(){
  abort = 0;
  mycode();
}

//var tid = setTimeout(mycode, 100);

function mycode() {
  if(abort != 100){
    ctx.clearRect(0,0,WIDTH,HEIGHT);
    for (let i = 0; i < 1000; i++) {
      ctx.beginPath();
      ctx.fillStyle = "rgba(" + random(255) + ", " + random(255) + ", " + random(255) + ", 0.5)";
      ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
      ctx.fill();
    }
    abort = abort + 1;
    tid = setTimeout(mycode, 100); // repeat myself
  }
  else{
    abortTimer();
  }

}
function abortTimer() { // to be called when you want to stop the timer
  clearTimeout(tid);
}

btn.addEventListener('click',resetAbort);
