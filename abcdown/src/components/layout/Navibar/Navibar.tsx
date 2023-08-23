import React, { useState } from 'react';
import styles from './Navibar.module.css'; // Importe o módulo CSS correto

import { Link } from 'react-router-dom';
import Class from '../icons/class.svg';
import Home from '../icons/home.svg';
import Settings from '../icons/settings.svg';
import Community from '../icons/community.svg';
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
            <NavItem onClick={toggleLabels} icon={ImageLogin} to="" label={showLabels ? "Camila" : ""}/>

            <nav className={styles.container_nav}>
                <ul className={showLabels ? '' : styles.hiden}>
                    <NavItem icon={Home} to="/" label={showLabels ? "home":""} classNameImg="navigation_img" />
                    {/* Outros fitens do menu */}
                </ul>
                <ul className={showLabels ? '' : styles.hiden}>
                    <NavItem icon={Community} to="/comunidade" label={showLabels? "comunidade" : ""} classNameImg="navigation_img"/>
                    {/* Outros itens do menu */}
                </ul>
                <ul className={showLabels ? '' : styles.hiden}>
                    <NavItem icon={Class} to="/turmas" label={showLabels? "sala" : ""} classNameImg="navigation_img" />
                    {/* Outros itens do menu */}
                </ul>
                <ul className={showLabels ? '' : styles.hiden}>
                    <NavItem icon={Settings} to="/configuracoes" label={showLabels ? "configuracoes" : ""} classNameImg="navigation_img"/>
                    {/* Outros itens do menu */}
                </ul>
            </nav>

            <NavItem icon={Exit} to="/login" label={showLabels ?  "sair" : ""} classNameImg="exit_img" />
        </>
    );
}

export default Navibar;
