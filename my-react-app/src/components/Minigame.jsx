import { Link } from 'react-router-dom';

import Stats from './Stats'
import Textbox from './Textbox' 
import Book from './Book'
import BookGUI from './BookGUI'

export default function Welcome() {
    return (
        <div style={{backgroundImage: '../src/assets/Images/hall.webp'}}>
            <Book />
            <Stats />
            <Textbox request={"PLEASE GIVE GOLD"} />
        </div> 
    )
}