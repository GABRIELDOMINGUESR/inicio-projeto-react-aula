import React from 'react';
import styles from './ContainerShareAbout.module.css';

interface ContainerCardProps {
    width?: string;
    height?: string;
    text?: string;
    description?: string;
    imageSrc?: string;
}

function ContainerShareAbout(props: ContainerCardProps) {
    const { width, height, text, description, imageSrc } = props;

    const containerCardClasses = `${styles.containerCard}`;

    return (
        <div className={containerCardClasses} style={{ width, height }}>
            <div className={styles.content}>
                <h2 className={styles.custom_text}>{text}</h2>
                <p className={styles.custom_description}>{description}</p>
              
            </div>
            {imageSrc && <img src={imageSrc} alt="Card Image"  className={styles.image}/>}
        </div>
    );
}

export default ContainerShareAbout;
