import React from 'react';
import styles from './GoogleLoginButton.module.css';

import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import { auth } from '../../../service/firebase';


interface GoogleLoginButtonProps {
    text?: string;
    imageSrc?: string;
    width?: string;
    height?: string;
}

function GoogleLoginButton(props: GoogleLoginButtonProps) {
    const containerStyle = {
        width: props.width,
        height: props.height
    };

    // Função para lidar com o evento de clique
    function handleButtonClick () {
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
        .then((result)=>{
            console.log(result);
            
        })
        .catch((error)=>{
            console.log(error);
            
        })
    }

    return (
        <button className={styles.inputContainer} style={containerStyle} onClick={handleButtonClick}>
            <img src={props.imageSrc} alt='' className={styles.image} />
            <span className={styles.textTitle}>Log in with Google</span>
        </button>
    );
}

export default GoogleLoginButton;
