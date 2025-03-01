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
        <div style={{backgroundImage: '/workspaces/Hackillinois-2025/my-react-app/src/assets/Images/hall.png'}}>
            <Book />
            <Stats />
            <Textbox request={"PLEASE GIVE GOLD"} />
        </div> 
    )
}