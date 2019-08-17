console.log("app.js file loaded");

// declare variables
let getText = document.getElementById("get-text");
var getJson = document.getElementById("get-json");
var getApi = document.getElementById("get-api");

// get text function
var printText = () => {
  console.log("get text function");
};

// event listeners
getText.addEventListener('click', textFile);
getJson.addEventListener('click', printText);
getApi.addEventListener('click', printText);

var textFile = () => {
  fetch('sample.text').then(function(res) { console.log(res) });
}