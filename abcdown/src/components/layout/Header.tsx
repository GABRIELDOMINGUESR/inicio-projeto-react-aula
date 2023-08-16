import styles from './Header.module.css'
import Navibar from '../layout/Navibar/Navibar'
function Header() {
    return (
        <header className={styles.header}>
            <Navibar />
        </header>
    );
}

export default Header
