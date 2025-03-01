import styles from './Welcome.module.css';
import { Link } from 'react-router-dom';

export default function Welcome() {
    function navigateToPage(page) {
        window.location.href = page;
    }

    return (
        <div>
            <h1 className={styles.text}>WELCOME</h1>
            <Link to= "/maingame"> CONTINUE </Link>
        </div> 
    )
}