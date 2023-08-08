import styles from './LinkButton.module.css'
import { Link } from 'react-router-dom'
function LinkButton({to, text}) {
     //to-> para onde vai
     // text -> texto que vou querer
    return(
    <Link className={styles.bnt} to={to}>{text}</Link>
    ) 
}

export default LinkButton