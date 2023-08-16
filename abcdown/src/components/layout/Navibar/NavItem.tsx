// NavItem.tsx
import styles from './NavItem.module.css'
import React from 'react';
import { Link } from 'react-router-dom';

interface NavItemProps {
    icon: string;
    to: string;
    label: string;
}

function NavItem({ icon, to, label }: NavItemProps) {
    return (
        <li className={styles.list_item_li_nav}>
            <img src={icon} alt={label} />
            <Link to={to}>{label}</Link>
        </li>
    );
}

export default NavItem;
