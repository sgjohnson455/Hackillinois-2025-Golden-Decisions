import styles from './Textbox.module.css';

export default function Textbox({request}) {
    return (
        <>
            <div className={styles.outBox}>
                <div className={styles.layout}>
                    <h1 className={styles.text}>Request</h1>
                    <p className={styles.text}>{request}</p>
                    <div>
                        <button className={styles.button} id={`YES`}>✔️</button>
                        <button className={styles.button} id={`NO`}>✖️</button>
                    </div>
                </div>
            </div>
        </>
    )
}