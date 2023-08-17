import React from 'react';
import PropTypes from 'prop-types';
 import styles from './ContainerCard.module.css'; // Importe o módulo CSS correto

interface ContainerCardProps {
    backgroundImage?: string;
    width?: string;
    height?: string;
    text?: string;
    description?: string;
    textClassName?: string;
    descriptionClassName?: string;
}

function ContainerCard(props: ContainerCardProps) {
    const { backgroundImage, width, height, text, description, textClassName, descriptionClassName } = props;

    const containerStyle = {
        backgroundImage: `url(${backgroundImage})`,
        width: width,
        height: height,
    };

    return (
        <div className={styles.containerCard} style={containerStyle}>
            <div className={styles.content}>
                <h2 className={textClassName}>{text}</h2>
                <p className={descriptionClassName}>{description}</p>
            </div>
        </div>
    );
}

export default ContainerCard;
