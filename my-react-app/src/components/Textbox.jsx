import styles from './Textbox.module.css';
import {updateStats} from '../assets/updateStats.js'


export default function Textbox({request}) {

    return (
        <div className={styles.outBox}>
            <div className={styles.layout}>
                <p className={styles.text}> <u>Request</u> </p>
                <h2 className={styles.text}>{request.description}</h2>
                <div>
                    <button className={styles.button} id={`YES`} onClick={() => updateStats(request.id, true)}>✔</button>
                    <button className={styles.button} id={`NO`} onClick={() => updateStats(request.id, false)}>✖</button>
                </div>
            </div>
        </div>
    )
}