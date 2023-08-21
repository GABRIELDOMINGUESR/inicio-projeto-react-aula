import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContainerCard.module.css';

interface ContainerCardProps {
    backgroundImage?: string;
    width?: string;
    height?: string;
    text?: string;
    description?: string;

}

function ContainerCard(props: ContainerCardProps) {
    const { backgroundImage, width, height, text, description} = props;

    const containerStyle = {
        backgroundImage: `url(${backgroundImage})`,
        width: width,
        height: height,
    };

    const containerCardClasses = `${styles.containerCard}`;

    return (
        <div className={containerCardClasses} style={containerStyle}>
            <div className={styles.content}>
                <h2 className={styles.custom_text}>{text}</h2>
                <p className={styles.custom_description}>{description}</p>
            </div>
        </div>
    );
}

export default ContainerCard;
