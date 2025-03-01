import styles from './Textbox.module.css';

export default function InventoryGUI() {
    return (
        <>
            <div className={styles.outBox}>
                <div className={styles.layout}>
                    <h2>Request</h2>
                    <div className={styles.gui}>
                    </div>
                </div>
            </div>
        </>
    )
}