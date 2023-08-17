import styles from './NavItem.module.css';
import React from 'react';
import { Link } from 'react-router-dom';

interface NavItemProps {
    icon: string;
    to: string;
    label: string;
    className: string;
}

function NavItem({ icon, to, label, className }: NavItemProps) {
    return (
        <li className={`${styles[className]}`}> {/* Usando a classe dinâmica aqui */}
            <img src={icon} alt={label} />
            <Link to={to}>{label}</Link>
        </li>
    );
}

export default NavItem;
