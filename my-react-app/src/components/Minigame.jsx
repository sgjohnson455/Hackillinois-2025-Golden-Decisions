import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import Stats from './Stats'
import Textbox from './Textbox' 
import Book from './Book'
import BookGUI from './BookGUI'
import generateRequest, {setup} from '../assets/updateStats.js'
import requests from '../assets/requests.json'

export default function Minigame() {
    let reqID = 0;
    useEffect(() => {
        setup(); reqID = generateRequest();
    }, []);

    return (
        <div style={{backgroundImage: '../src/assets/Images/hall.webp'}}>
            <Book />
            <Stats />
            <Textbox request={requests.find(item => item.id === reqID)} />
        </div> 
    )
}