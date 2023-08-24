import React from "react";
import styles from './AuthenticationOptions.module.css';

interface AuthenticationOptionsProps {
    text: string,
    color: string
}

function AuthenticationOptions(props: AuthenticationOptionsProps) {
    return (
        <span style={{
            color: props.color
        }}>{props.text}</span>
    );
}

export default AuthenticationOptions;
