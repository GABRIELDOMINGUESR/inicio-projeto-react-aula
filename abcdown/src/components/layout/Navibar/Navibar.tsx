// Navibar.tsx
import styles from './Navibar.module.css'; // Importe o módulo CSS correto
import React from 'react';
import { Link } from 'react-router-dom';
import Class from '../icons/class.png';
import Home from '../icons/home.png';
import Settings from '../icons/settings.png';
import Community from '../icons/community.png';
import NavItem from './NavItem';


function Navibar() {
    return (
        <nav className={styles.container_nav}>
            <ul>
                <NavItem icon={Home} to="/" label="home" />
                {/* Outros itens do menu */}
            </ul>
            <ul>
                <NavItem icon={Community} to="/comunidade" label="comunidade" />
                {/* Outros itens do menu */}
            </ul>
            <ul>
                <NavItem icon={Class} to="/turmas" label="sala" />
                {/* Outros itens do menu */}
            </ul>
            <ul>
                <NavItem icon={Settings} to="/configuracoes" label="configurações" />
                {/* Outros itens do menu */}
            </ul>
        </nav>
    );
}

export default Navibar;
