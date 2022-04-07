//document.querySelector('button');
//document.querySelector('.new-quote button');

const quoteButton = document.querySelector('#js-new-quote');
const endPoint = 'https://dog.ceo/api/breeds/image/random';

async function  getQuote(){
  console.log("Quote button clicked");
  try {
    const response = await fetch(endPoint);
    if(!response.ok){ //Throw an error if the API does not work (account, verification. etc...)
      throw Error(response.statusText);
    }
    const json = await response.json(); //Getting the json that comes with the response
    console.log(json);
    displayFact(json.message);

  } catch (err){
    console.log(err);
    alert('Failed');
  }
}

function displayFact(fact){
  //var img = new Image();
  const factText = document.querySelector('#js-quote-text');
  factText.src = fact;

  document.querySelector('#downloadButton').setAttribute('href', fact)
}

quoteButton.addEventListener('click', getQuote);
