const { json } = require('stream/consumers');
let XMLhttprequest = require('xhr2');

let xhr = new XMLhttprequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');

xhr.onload = function () {


    let data = JSON.parse(xhr.response);
   
data.forEach(element => {
    console.log(`Name :${element['name'].common}
        capital :${element['capital']}
        Flag : ${element['flag']}`)
    });
   }
xhr.send();