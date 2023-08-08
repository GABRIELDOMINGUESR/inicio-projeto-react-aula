import styles from './Navibar.module.css'
import { Link } from "react-router-dom";
import Container from './Container'
import logo from '../../img/costs_logo.png'

function Navibar() { 
    return(<> 
    
    <div>
       <Link to="/">Home</Link>
       <Link to="/contact">Contato</Link>
       <Link to="/company">Empresa</Link>
       <Link to="/newproject">Novo Projeto</Link>
    </div> 
    </>)

}

export default Navibar