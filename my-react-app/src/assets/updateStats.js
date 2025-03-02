import requests from './requests.json'

// global variables
let uncompletedRequests = [];
let completedRequests = [];
let gold = 100;
let people = requests.length;
let happiness = 100;

// Setup Function - call once
export async function setup() {
    // initializing set
    for (let i = 0; i < people; i++) {
        uncompletedRequests.push(i);
    }

    // button setup
        // const acceptButton = document.getElementById('#YES');
        // acceptButton.addEventListener('click', updateStats(requestID, true));

        // const rejectButton = document.getElementById('#NO');
        // rejectButton.addEventListener('click', updateStats(requestID, false));
}

// Function to generate a request based on randomization
// Runs until the end of the game
export default async function generateRequest() {
    // run while there are still requests
    while (uncompletedRequests.length > 0) {
        let randInd = Math.floor(Math.random() * (uncompletedRequests.length));
        let requestID = uncompletedRequests[randInd];
        completedRequests.push(requestID);
        uncompletedRequests.splice(randInd, 1);
// console.log(requestID);
        return requestID;
    }
}

// Function to update the stats on the webpage depending on what the user selected in reponse to a request
// @param: currRequest - an int containing the ID of the request that was prompted
// @param: action - a boolean representing whether the user accepts (true) or rejects (false) the request
export async function updateStats(currRequest = 0, action) {
    // console.log(uncompletedRequests);
    // console.log(completedRequests);
    // console.log(currRequest);

    let goldStats = document.getElementById('GOLD');
    let peopleStats = document.getElementById('PEOPLE');
    let happinessStats = document.getElementById('HAPPINESS');

    let actionResults; 

    if (action) { // user accepts
        actionResults = requests[currRequest]["accept"];
    }
    else { // user rejects
        actionResults = requests[currRequest]["reject"];
    }

    gold = parseInt(goldStats.innerText) + actionResults["gold"];
    goldStats.innerText = gold;
    people = parseInt(peopleStats.innerText) - 1;
    peopleStats.innerText = people;
    happiness = parseInt(happinessStats.innerText) + actionResults["happiness"];
    happinessStats.innerText = happiness;

    checkWin();
    return generateRequest();
}

async function checkWin() {
    let docBody = document.getElementsByTagName('body');

    if (people === 0) {// continue
        console.log("NO MORE REQUESTS");
    }
    // victoryScreen = document.createElement('div');
    // victoryScreen.innerText = 'Victory!';
    // victoryScreen.style.position = 'fixed';
    // victoryScreen.style.top = '50%';
    // victoryScreen.style.left = '50%';
    // victoryScreen.style.transform = 'translate(-50%, -50%)';
    // victoryScreen.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    // victoryScreen.style.color = 'white';
    // victoryScreen.style.fontSize = '2em';
    // victoryScreen.style.padding = '20px';
    // victoryScreen.style.borderRadius = '10px';
    // victoryScreen.style.zIndex = '999';
    // document.body.appendChild(victoryScreen);
    // setTimeout(() => {
    //     document.body.removeChild(victoryScreen);
    // }, 1500);
    // return true;
}