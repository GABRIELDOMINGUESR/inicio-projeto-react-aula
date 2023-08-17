import styles from './NavItem.module.css';
import React from 'react';
import { Link } from 'react-router-dom';

interface NavItemProps {
    icon: string;
    to: string;
    label?: string;
    className?: string;
    onClick?: () => void;
    classNameImg?: string;
    classNameLink?: string;
}

function NavItem({ icon, to, label, className, onClick, classNameImg, classNameLink }: NavItemProps) {
    return (
        <li onClick={onClick} className={className ? styles[className] : ''}>
            <img src={icon} alt={label} className={classNameImg ? styles[classNameImg] : ''} />
            <Link to={to} className={classNameLink ? styles[classNameLink] : ''}>{label}</Link>
        </li>
    );
}

export default NavItem;
