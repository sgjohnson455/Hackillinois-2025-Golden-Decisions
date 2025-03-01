import styles from './Stats.module.css';

export default function Stats({}) {
    return (
        <div className={styles.layout}>
            <div className={styles.layout} style={{gap: '0.5rem', transform: 'translateY(0rem)'}}>
                <h3>💰</h3>
                <p id={`GOLD`}>100</p>
            </div>
            <div className={styles.layout} style={{gap: '0.5rem', transform: 'translateY(0rem)'}}>
                <h3>👤</h3>
                <p id={`PEOPLE`}>100</p>
            </div>
            <div className={styles.layout} style={{gap: '0.5rem', transform: 'translateY(0rem)'}}>
                <h3>😀</h3>
                <p id={`HAPPINESS`}>100</p>
            </div>
        </div>
    )
}