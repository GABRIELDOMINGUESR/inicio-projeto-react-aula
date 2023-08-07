import {FaFacebook, FaInstagram, FaWhatsapp} from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer() {

    return(
        <>
        <footer style={ {
              backgroundColor:' #333',
              color: '#fff',
              padding: '20px',
              textAlign: 'center',
              width:'100%'
        }}>Footer 
            <ul className={styles.social_list} >
                <li><FaFacebook/></li>
                <li><FaInstagram/></li>
                <li> <FaWhatsapp/> </li>
            </ul>
        </footer>
        
        </>
    )
}

export default Footer
