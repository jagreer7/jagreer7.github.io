function getUtterance(title){
  if(document.title === "Homepage Jackson Greer"){
    console.log(document.title)
    return '.box2';
  }
  if(document.title === "About Me Jackson Greer"){
    console.log(document.title)
    return '.box2';
  }
  if(document.title === "Contact Me"){
    console.log(document.title)
    return '.box2';
  }
  if(document.title === "Design Foundations Jackson Greer"){
    console.log(document.title)
    return '.readThis';
  }
  if(document.title === "Image Jackson Greer"){
    console.log(document.title)
    return '.readThis';
  }
  if(document.title === "Web Jackson Greer"){
    console.log(document.title)
    return '.readThis';
  }
  if(document.title === "Works Jackson Greer"){
    console.log(document.title)
    return '.readThis';
  }
  if(document.title === "Stats Jackson Greer"){
    console.log(document.title)
    return '.readThis';
  }
}

onload = function() {
  if ('speechSynthesis' in window) {
    console.log('Speech Synthesis Supported');
    var synth = speechSynthesis;
    var playing = false;

    var playButton = document.querySelector('.play');
    var pauseButton = document.querySelector('.pause');
    var stopButton = document.querySelector('.stop');

    function onClickPlay() {
      console.log('Play');
      if (!playing){ //if not playing...
         playing = true;
         const textToRead = document.querySelector(getUtterance(document.title));
         utterance = new SpeechSynthesisUtterance(textToRead.textContent);
         utterance.voice = synth.getVoices()[0]; //The voice that will read the text
         utterance.onend = function(){playing = false;}; //Reset playing when the speech is over
         synth.speak(utterance); //Execute the speak function to say the utterance
      }
      if(synth.paused) { //Use the built in resume to resume the function
        synth.resume();
      }
    }
    function onClickPause() {
      console.log('Pause');
      if(synth.speaking && !synth.paused){ //Pause if the person is speaking AND it is not currently paused
        synth.pause(); //Pases the speaking
      }
    }
    function onClickStop() {
      console.log('Stop');
      if(synth.speaking){
        playing = false;
        synth.cancel(); //Cancels the speking
      }
    }

    playButton.addEventListener('click', onClickPlay);
    pauseButton.addEventListener('click', onClickPause);
    stopButton.addEventListener('click', onClickStop);
 
  }
  else {
      alert('Speech Synthesis Not Supported');
      console.log('Speech Synthesis Not Supported');
  }
}
