const { response } = require("express");

/* Global Variables */
const baseUrl = "http://api.openweathermap.org/data/2.5/weather?zip=";

// My API Key
const apiKey = '&appid=[fac7a4713995c862df90823cd3df6d39]&units=metric';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// Obtaining the Event Listener to add functionality to the Domain
document.getElementById("generate").addEventListener("click", weatherData);

// Retreive API Information from openweathermap
let apiWeather = async (baseURL, zip, apiKey) =>{
  let res = await fetch(baseURL+zip+apiKy);
try{
  let weatherData = await response.json();
  return weatherData
}catch(error) {
  console.log("something is wrong", error);
}
};

// Send the Data to the website
let updateWeather = async (url = "", data = {}) => {
  let res = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  try {
    let trueApiWeather = await res.json();
    return trueApiWeather;
  } catch(error) {
    console.log("something is wrong with the apiweather", error);
  };
}

// Get the Data from the website
let getWeather = async ( url="") =>{
  let getUrl = await fetch(url);
  try {
    let getWeather = await getUrl.json()
  }
  catch (error){
    console.log("something is wrong with retreval of data", error);
  }
};

// Updating the User Interface



// Function that transmits data from openweathermap
function obtainWeather(){
  let personFeeling = document.getElementById("user-feeling").nodeValue;
  let zipCode = document.getElementById("zip").nodeValue;


}