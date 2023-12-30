const { json } = require('stream/consumers');
let XMLhttprequest = require('xhr2');

let xhr = new XMLhttprequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');

xhr.onload = function () {

    let data = JSON.parse(xhr.response);
    //console.log(data)

    let result = data.filter((country) => {
        for (let index in country.currencies) {
            if (country.currencies[index].name == 'United States dollar') {
                console.log(country.name.common)
            }
        }
    }) 
   }
xhr.send();