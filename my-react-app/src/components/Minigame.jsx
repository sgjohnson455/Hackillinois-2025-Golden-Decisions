import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';


import Stats from './Stats'
import Textbox from './Textbox' 
import Book from './Book'
import BookGUI from './BookGUI'
import generateRequest, {setup} from '../assets/updateStats.js'
import requests from '../assets/requests.json'

export default function Minigame() {
    useEffect(() => {
        setup();
    }, []);

    const [stateID, setID] = useState(0);
    console.log("ID");
    console.log({stateID});
    // reqITEM = requests.find(item => item.id === stateID);
    // console.log(reqITEM);
    
    return (
        <div style={{backgroundImage: '../src/assets/Images/hall.webp'}}>
            <Book />
            <Stats />
            <p>{stateID}</p>
            <Textbox request={requests.find(item => item.id === stateID)} updateID={setID} />
        </div> 
    )
}