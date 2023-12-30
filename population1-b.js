const { json } = require('stream/consumers');
let XMLhttprequest = require('xhr2');

let xhr = new XMLhttprequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');

xhr.onload = function () {


    let data = JSON.parse(xhr.response);
   
    let result = data.filter((country, numbers, listOfContrys) => {
        if (country['population'] < '200000') {
            console.log(`${country['name'].common}:${country['population']}`)
        } 
    })
   
   }
xhr.send();
