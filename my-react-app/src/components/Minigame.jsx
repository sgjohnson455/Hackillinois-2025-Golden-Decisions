import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';


import Stats from './Stats'
import Textbox from './Textbox' 
import Book from './Book'
import BookGUI from './BookGUI'
import {setup} from '../assets/updateStats.js'
import requests from '../assets/requests.json'

export default function Minigame() {
    useEffect(() => {
        setup();
    }, []);

    // const [stateID, setID] = useState(0);

    // function chooseRequest(req) {
    //     setID(req);
    // }

    // console.log("ID");
    // console.log(stateID);
    // console.log(stateID["value"]);

    // let reqITEM = requests.find(item => item.id === stateID);
    // let reqITEM = requests.find(item => item.id === 0);
    // console.log(reqITEM);
    
    return (
        <div style={{backgroundImage: '../src/assets/Images/hall.webp'}}>
            <Book />
            <Stats />
            <Textbox id={`#TEXTBOX`} />
        </div> 
    )
}