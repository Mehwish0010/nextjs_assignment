// components/MovingText.js
import React from 'react';
import styles from '@/components/MovingText.module.css'; // Import CSS Module

const MovingText = () => {
    return (
        <div className={`${styles.movingText} px-20 text-2xl  items-center font-extrabold tracking-tight py-5 bg-myOrange text-myWhite w-full`}>
            <h1>
                <span className={styles.brandName}>Fashion Fiesta</span>
                <span className={styles.brandName}> | Urban Elegance</span>
                <span className={styles.brandName}> | Glamour Haven</span>
                <span className={styles.brandName}> | Timeless Threads</span>
                
            
            </h1>
        </div>
    );
};

export default MovingText;
