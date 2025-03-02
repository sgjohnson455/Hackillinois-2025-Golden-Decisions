import styles from './Stats.module.css';
import requests from '../assets/requests.json'

export default function Stats({}) {
    return (
        <div className={styles.layout}>
            <div className={styles.layout} style={{gap: '0.5rem', transform: 'translateY(0rem)'}}>
                <img src="/src/assets/Images/heart-icon.png" alt="Heart Icon" style={{width: '40px', height: '40px'}} />
                <p id={`HAPPINESS`}>100</p>
            </div>
            <div className={styles.layout} style={{gap: '0.5rem', transform: 'translateY(0rem)'}}>
                <img src="/src/assets/Images/parchment-icon.png" alt="Scroll Icon" style={{width: '40px', height: '40px'}} />
                <p id={`PEOPLE`}>{requests.length}</p>
            </div>
            <div className={styles.layout} style={{gap: '0.0rem', transform: 'translateY(0rem)'}}>
                <img src="/src/assets/Images/coin-icon.png" alt="Coin Icon" style={{width: '40px', height: '40px'}} />
                <p id={`GOLD`}>100</p>
            </div>
        </div>
    )
}