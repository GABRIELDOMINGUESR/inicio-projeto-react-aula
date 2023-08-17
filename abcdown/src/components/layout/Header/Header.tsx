// components/PageHeader.js
import React from 'react';
import styles from './Header.module.css'

interface HeaderProps {
    title: string; // Defina o tipo apropriado para o título, por exemplo, string.
}

function Header({ title }: HeaderProps) {
    return (
        <div className={styles.container_title_page}>
    <h1 className={styles.title_page}>{title}</h1>;

        </div>
    )
    
}

export default Header;
