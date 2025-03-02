import styles from './Welcome.module.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Welcome() {
    return (
        <div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}>

                <motion.h1
                    className={styles.text}
                    initial={{ y: '30vh', fontSize: '120px' }} // starting animation
                    animate={{ y: '-5vh', fontSize: '70px' }} // ending animation
                    transition={{ duration: 2, delay: 1 }}>
                    WELCOME
                </motion.h1>

            </motion.div>

            <div style={{
                height: '70vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }}>
                <motion.img
                    className={styles}
                    src="src\assets\Images\greek_scroll.png"
                    width='1200vw'
                    height='700vh'
                    initial={{ y: '500px', opacity: 0 }}
                    animate={{ y: '-7vh', opacity: 1 }}
                    transition={{ duration: 2, delay: 1 }}>
                </motion.img>

                <motion.div
                    className={styles.rules}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 3 }}>

                    <h1><u> Overview </u></h1>
                    <p>
                        1) You, Midas, are the ruler of the kingdom, and your citizens come to you for financial
                        requests/advice.
                    </p>
                    <p>
                        2) As the ruler of the kingdom, you must decide whether you think the request/advice is good 
                        or bad by choosing either a yes or no option.
                    </p>
                    <p>
                        3) You start off with certain metrics, such as <u>happiness</u> and <u>wealth</u>. Happiness
                        represents how content your people are with your decisions, and wealth represents the amount of
                        gold you have. You want to keep happiness as high as possible to avoid any negative consequences.
                    </p>
                    <p>
                        4) You must balance happiness and wealth. If any of these go too low, you may face problems
                        like being betrayed by your people or not having enough gold to keep the kingdom running.
                    </p>
                </motion.div>

                <motion.button
                    className={styles.button}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 4.5 }}>
                    <Link to="/maingame"> START </Link>
                </motion.button>
            </div>
        </div>
    )
}