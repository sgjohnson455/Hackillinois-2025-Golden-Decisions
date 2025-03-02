import React, { useState } from 'react';

import styles from './Textbox.module.css';
import { updateStats } from '../assets/updateStats.js'
import requests from '../assets/requests.json';


export default function Textbox() {
    let reqId = 0; // temp variable

    const [stateID, setID] = useState(0); // using states to update the textbox whenever a decision has been chosen
    async function chooseRequest(req) { // helper function
        setID(await req);
    }
    let request = requests.find(item => item.id === stateID); // grabbing specific request item from json
    // console.log(request);
    return (
        <div className={styles.layout}>
            <p className={styles.header}> <u>Request</u> </p>
            <h2 className={styles.text}>{request.description}</h2>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '5rem' }}>
                <button className={styles.button} id={`YES`} onClick={() => { reqId = updateStats(request.id, true); chooseRequest(reqId) }}>✔</button>
                <button className={styles.button} id={`NO`} onClick={() => { reqId = updateStats(request.id, false); chooseRequest(reqId) }}>✖</button>
            </div>
        </div>
    )
}