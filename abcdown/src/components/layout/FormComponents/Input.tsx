import React from 'react';
import styles from './Input.module.css';

interface InputProps {
    text?: string;
    width?: string;
    height?: string;
    type?: string;
    value?: string; // Adicione a propriedade value para o valor do input
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
                type={props.type}
                style={{
                    ...inputStyle,
                }}
                value={props.value} // Use o valor da propriedade value
                onChange={props.onChange}
            />
        </div>
    );
}


export default Input;
