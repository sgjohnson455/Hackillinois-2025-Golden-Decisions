import styles from './Book.module.css';

export default function BookGUI() {
    // pageID = 0;

    return (
        <>
            <div className={styles.outBox}>
                <div className={styles.layout}>
                    <h3>{bookInfo.find(elem => elem.id === 0).title}</h3>
                    <h3>{bookInfo.find(elem => elem.id === 0).content}</h3>
                </div>
            </div>
        </>
    )
}