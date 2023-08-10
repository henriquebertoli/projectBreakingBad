let xhr = new XMLHttpRequest();
let frase = document.getElementById("fala_BreakingBad");
const buttonRandom = document.querySelector("#btnrandom");

console.log("UNSENT", xhr.readyState); //readyState será 0

xhr.open("GET", " https://api.breakingbadquotes.xyz/v1/quotes", true);
console.log("OPENED", xhr.readyState); //readyState será 1

xhr.onprogress = function () {
  console.log("LOADING", xhr.readyState); //readyState será 3
};
xhr.onload = function () {
  console.log("DONE", xhr.readyState); //readyState será 4

  buttonRandom.addEventListener("click", function () {
    resposta = JSON.parse(xhr.responseText);
    var fala = resposta[0].quote;
    frase.innerHTML = fala;
  });
};

xhr.send();

/* LOCAL STORAGE*/

function adicionar() {
  var email = document.getElementById("email").value;

  localStorage.email = email;
}
/*
/*buttonRandom.addEventListener('click', getQuote);

async function getQuote() {
const quoteData = await fetch (' https://api.breakingbadquotes.xyz/v1/quotes', {
  headers: {
    'accept' : 'application/json'
  }
});
  const quoteObj = await quoteData.json();
  console.log(quoteData)
}
*/
