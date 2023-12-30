let XMLhttprequest = require('xhr2');

let xhr = new XMLhttprequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');

xhr.onload = function () {
    let data = JSON.parse(xhr.response);
    let populationArray = [];
    for (country of data) {
        
        populationArray.push(country['population'])
         
    }
    let result = populationArray.reduce((pre, cur)=> {
        return pre + cur
})
    console.log(result)
    
}
xhr.send();