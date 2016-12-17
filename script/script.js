let searchField = document.querySelector('#search');
let resultElement = document.querySelector('.resortStatistics');

var token = '?token=a5bae8eea465aae8f096ad0b775121a6702a31e6eb2686d8';


function attachListeners(selector) {
    let element = document.querySelector(selector);
    element.addEventListener('input', eventHandler); //when input by user occurs, run the function eventHandler
};

function eventHandler(evnt) {
    let key = evnt.target.value;
    //run through the results from API 

    //append result to html 
    let typedResort = document.querySelector(input);
    for (let value of typedResort) {
        let newLi = document.createElement('li'); //create a new li element in html 
        newLi.innerText = ' '; //show name in a li in html
        typedResort.appendChild(newLi);
    }
};

attachListeners('#input'); //run the function attachListeners
