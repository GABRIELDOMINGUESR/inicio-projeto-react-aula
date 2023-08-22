import React from 'react';
import styles from './Input.module.css';

interface InputProps {
    text?: string;
    width?: string;
    height?: string;
}

function Input(props: InputProps) {
    const inputStyle = {
        width: props.width,
        height: props.height
    };

    return (
        <div className={styles.inputContainer}>
            <span className={styles.textTitle}>{props.text}</span>
            <input
                className={`${styles.inputField} ${styles.inputWithImage}`}
                type="text"
                style={{
                    ...inputStyle,
                  
                }}
              
            />
        </div>
    );
}

export default Input;
