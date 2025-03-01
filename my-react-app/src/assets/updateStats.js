import requests from './requests.json'

// Function to generate a request based on what 
// Runs until the end of the game
export async function generateRequest() {
    let uncompletedRequests = new Set();
    let completedRequests = new Set();

    // initializing set
    for (let i = 0; i <= 100; i++) {
        uncompletedRequests.add(i);
    }

    // run while there are still requests
    while (uncompletedRequests.size > 0) {
        let requestID = Math.floor(Math.random() * (uncompletedRequests.size + 1));
        completedRequests.add(requestID);
        uncompletedRequests.delete(requestID);

        const acceptButton = document.getElementById('#YES');
        acceptButton.addEventListener('click', updateStats(requestID, true));

        const rejectButton = document.getElementById('#NO');
        rejectButton.addEventListener('click', updateStats(requestID, false));
    }
}

// Function to update the stats on the webpage depending on what the user selected in reponse to a request
// @param: currRequest - an int containing the ID of the request that was prompted
// @param: action - a boolean representing whether the user accepts (true) or rejects (false) the request
export default async function updateStats(currRequest, action) {
    const data = require('./requests.json');
    currRequest = 0;
    action = true;

    let goldStats = document.getElementById('#GOLD');
    let peopleStats = document.getElementById('#PEOPLE');
    let happinessStats = document.getElementById('#HAPPINESS');

    let actionResults; 

    if (action) { // user accepts
        actionResults = data[id]["accepts"];
        console.log(actionResults)
    }
}