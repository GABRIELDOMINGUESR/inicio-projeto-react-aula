import React, { useState } from 'react';
import styles from './Navibar.module.css'; // Importe o módulo CSS correto

import { Link } from 'react-router-dom';
import Class from '../icons/class.png';
import Home from '../icons/home.png';
import Settings from '../icons/settings.png';
import Community from '../icons/community.png';
import Exit from '../icons/_icons.png';
import NavItem from './NavItem';
import ImageLogin from '../img_Crud/image_login.png'

function Navibar() {
    const [showLabels, setShowLabels] = useState(true);

    const toggleLabels = () => {
        setShowLabels(!showLabels);
    }

    return (
        <>
            <NavItem onClick={toggleLabels} icon={ImageLogin} to="" label={showLabels ? "Camila" : ""} classNameImg="user_img" classNameLink="name_user"/>

            <nav className={styles.container_nav}>
                <ul className={showLabels ? '' : styles.hiden}>
                    <NavItem icon={Home} to="/" label={showLabels ? "home":""} classNameImg="navigation_img" classNameLink="navigation_text"/>
                    {/* Outros fitens do menu */}
                </ul>
                <ul className={showLabels ? '' : styles.hiden}>
                    <NavItem icon={Community} to="/comunidade" label={showLabels? "comunidade" : ""} classNameImg="navigation_img" classNameLink="navigation_text"/>
                    {/* Outros itens do menu */}
                </ul>
                <ul className={showLabels ? '' : styles.hiden}>
                    <NavItem icon={Class} to="/turmas" label={showLabels? "sala" : ""} classNameImg="navigation_img" classNameLink="navigation_text"/>
                    {/* Outros itens do menu */}
                </ul>
                <ul className={showLabels ? '' : styles.hiden}>
                    <NavItem icon={Settings} to="/configuracoes" label={showLabels ? "configuracoes" : ""} classNameImg="navigation_img" classNameLink="navigation_text"/>
                    {/* Outros itens do menu */}
                </ul>
            </nav>

            <NavItem icon={Exit} to="/login" label={showLabels ?  "sair" : ""} classNameImg="exit_img" classNameLink="exit_text"/>
        </>
    );
}

export default Navibar;
