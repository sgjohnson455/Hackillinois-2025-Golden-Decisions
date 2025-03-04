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

                    <h1><u> Golden Decisions - Overview </u></h1>
                    <p>
                        1) You are King Midas, ruler of Phyrgia. As King, it is your job to manage certain metrics, such as <u>happiness</u> and <u>wealth</u>. Happiness
                        represents how content your people are with your decisions, and wealth represents how much gold you currently possess. You
                        want to keep happiness as high as possible to avoid any negative consequences.
                    </p>
                    <p>
                        2) As the ruler of the kingdom, you get first and final say on any queries your people have come to you with. This is a system that has worked out greatly for you.
                        That is, until Dionysus gifted you the Golden Touch.
                    </p>
                    <p>
                        3) Manage your people and their growing perception of your wealth, using financial literacy skills!
                    </p>
                    <p>          ** Fun fact, financial literacy rates for adults sits at around 50%</p>
                </motion.div>

                <div style={{ position: 'absolute', bottom: '17%', display: 'flex', flexDirection: 'row', gap: '5rem', justifyItems: 'center' }}>
                    <motion.button
                        className={styles.button}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 4.5 }}>
                        <Link to="/maingame"> START </Link>
                    </motion.button>

                    <motion.button
                        className={styles.button}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 4.5 }}>
                        <Link to="https://drive.google.com/file/d/1jZlzbTP4TEQH9o-JAwhXdQVQnGZ7JbQQ/view?usp=sharing"> LETTER </Link>
                    </motion.button>
                </div>
            </div>
        </div>
    )
}