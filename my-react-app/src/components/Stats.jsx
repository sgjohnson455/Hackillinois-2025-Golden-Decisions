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
            <div className={styles.layout} style={{gap: '0.0rem', transform: 'translateY(0rem)'}}>
                <img src="/src/assets/Images/coin-icon.png" alt="Coin Icon" style={{width: '40px', height: '40px'}} />
                <p id={`HAPPINESS`}>100</p>
            </div>
        </div>
    )
}