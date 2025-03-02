import React from 'react';
import styles from './Book.module.css';

export default function Book() {
    
    function openBook({url='https://drive.google.com/file/d/1jZlzbTP4TEQH9o-JAwhXdQVQnGZ7JbQQ/view?usp=sharing', windowName = '_blank'}) {
        // const handleClick = () => {
            window.open(url, windowName);
        // };
    }

    return (
        <>
            <button className={styles.button} onClick={openBook}>BOOK</button>
        </>
    )
}