import styles from './Textbox.module.css';
import {updateStats} from '../assets/updateStats.js'
import requests from '../assets/requests.json';


export default function Textbox({request, updateID}) {
    let reqId = 0;
    // console.log(reqId);

    return (
        <div className={styles.layout}>
            <p className={styles.text}> <u>Request</u> </p>
            <h2 className={styles.text}>{request.description}</h2>
            <div style={{display: 'flex', flexDirection: 'row', gap: '5rem'}}>
                <button className={styles.button} id={`YES`} onClick={() => {reqId = updateStats(request.id, true); updateID(reqId)}}>✔</button>
                <button className={styles.button} id={`NO`} onClick={() => {reqId = updateStats(request.id, false); updateID(reqId)}}>✖</button>
            </div>
        </div>
    )
}