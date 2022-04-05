//document.querySelector('button');
//document.querySelector('.new-quote button');

const quoteButton = document.querySelector('#js-new-quote');

function getQuote(){
  console.log("Quote button clicked");
}

quoteButton.addEventListener('click', getQuote);
