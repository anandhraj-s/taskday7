const { json } = require('stream/consumers');
let XMLhttprequest = require('xhr2');

let xhr = new XMLhttprequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');

xhr.onload = function () {


    let data = JSON.parse(xhr.response);

    console.log('ASIAN COUNTRIES :')
   
    let asiancountry = data.filter((country,numbers,listOfContrys) => {
        if (country['continents'] == 'Asia') {             
            console.log(country['name'].common)
        }
    })
   }
xhr.send();


