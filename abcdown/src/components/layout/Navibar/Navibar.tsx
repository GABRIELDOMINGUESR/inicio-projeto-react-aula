// Navibar.tsx
import styles from './Navibar.module.css'; // Importe o módulo CSS correto
import React from 'react';
import { Link } from 'react-router-dom';
import Class from '../icons/class.png';
import Home from '../icons/home.png';
import Settings from '../icons/settings.png';
import Community from '../icons/community.png';
import Exit from '../icons/_icons.png';
import NavItem from './NavItem';
import ImageLogin from '../img_Crud/image_login.png'

function Navibar() {
    return (
  <>
        <NavItem icon={ImageLogin} to="" label="Camila" className='user'/>

<nav className={styles.container_nav}>
    <ul>
        <NavItem icon={Home} to="/" label="home" className='list_item_li_nav' />
        {/* Outros itens do menu */}
    </ul>
    <ul>
        <NavItem icon={Community} to="/comunidade" label="comunidade" className='list_item_li_nav'/>
        {/* Outros itens do menu */}
    </ul>
    <ul>
        <NavItem icon={Class} to="/turmas" label="sala" className='list_item_li_nav'/>
        {/* Outros itens do menu */}
    </ul>
    <ul>
        <NavItem icon={Settings} to="/configuracoes" label="configurações" className='list_item_li_nav'/>
        {/* Outros itens do menu */}
    </ul>
</nav>

<NavItem icon={Exit} to="" label="sair" className='exit' />
  </>
    );
}

export default Navibar;
