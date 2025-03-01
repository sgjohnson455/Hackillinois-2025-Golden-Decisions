import styles from './Textbox.module.css';

export default function Textbox({request}) {
    return (
        <div className={styles.textbox}>
            <div className={styles.outBox}>
                <div className={styles.layout}>
                    <p className={styles.text}> <u>Request</u> </p>
                    <h2 className={styles.text}>{request}</h2>
                    <div>
                        <button className={styles.button} id={`YES`}>✔</button>
                        <button className={styles.button} id={`NO`}>✖</button>
                    </div>
                </div>
            </div>
        </div>
    )
}