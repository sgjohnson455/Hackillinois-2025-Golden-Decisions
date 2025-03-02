import React from 'react';
import styles from './Book.module.css';

export default function Book() {
    
    function openBook({url='hall.png', windowName = '_blank'}) {
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