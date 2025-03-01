import { Link } from 'react-router-dom';

import Stats from './Stats'
import Textbox from './Textbox' 
import Book from './Book'
import BookGUI from './BookGUI'

export default function Welcome() {
    function navigateToPage(page) {
        window.location.href = page;
    }

    return (
        <div>
            <Book />
            <Stats />
            <Textbox request={"PLEASE GIVE GOLD"} />
        </div> 
    )
}