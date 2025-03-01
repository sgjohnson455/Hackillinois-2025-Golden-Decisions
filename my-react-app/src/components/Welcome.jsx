import styles from './Welcome.module.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Welcome() {
    return (
        <div>
            <motion.div 
                initial= {{opacity: 0}}
                animate= {{opacity: 1}}
                transition={{duration: 1}}>

                <motion.h1
                    className={styles.text}
                    initial= {{y: 0, fontSize: '120px'}} // starting animation
                    animate= {{y: -230, fontSize: '90px'}} // ending animation
                    transition= {{duration: 2, delay: 1}}>
                        WELCOME
                </motion.h1>

            </motion.div>

            <div>
                <img src= "../assets/greek_scroll.png"></img>
            </div>

            <motion.button 
                className={styles.button}
                initial= {{opacity: 0}}
                animate= {{opacity: 1}}
                transition= {{duration: 1, delay: 3}}> 
                    <Link to= "/maingame"> CONTINUE </Link> 
            </motion.button>
        </div> 
    )
}