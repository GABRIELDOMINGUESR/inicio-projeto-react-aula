import React from 'react';
import styles from './Btn.module.css';

interface ButtonProps {
    text?: string;
    color?: string;
    width?: string;
    height?: string
}

function Button(props: ButtonProps) {
    return (
        <div className={styles.containerBtn}>
            <button 
            className={styles.btn}
            style={{ 
                backgroundColor: props.color,
                width:props.width,
                height:props.height
                 }}>
                {props.text}
            </button>
        </div>
    );
}

export default Button;
