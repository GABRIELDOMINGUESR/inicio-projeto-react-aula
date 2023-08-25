import React from "react";
import styles from './AuthenticationOptions.module.css';

interface AuthenticationOptionsProps {
    text?: string,
    color?: string
}

function AuthenticationOptions(props: AuthenticationOptionsProps) {
    return (
        <span style={{
            color: props.color,
            fontSize:'0.7vw'
        }}>{props.text}</span>
    );
}

export default AuthenticationOptions;
