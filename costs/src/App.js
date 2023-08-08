import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProjects'
import Container from './components/layout/Container'
import Navibar from "./components/layout/Navibar";
import Projects from "./components/pages/Projects"
import Footer from "./components/layout/Footer";

function App() {
  return (
    <Router>
      <Navibar/>
      <Container customClass='min-height'>   
      <Routes>

        <Route exact path='/' element={<Home/>}></Route>
        <Route path='/company' element={<Company/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/newproject' element={<NewProject/>}></Route>
        <Route path='/projects' element={<Projects/>}></Route>
      </Routes>
      </Container>      
      <Footer/>
    </Router>
  );
}

export default App;

// para esse projeto foram istalados as segui ntes dependencias
//npm install json-server -> backend fake para fazer reqisicao com api
//npm install react-icons
//npm install react-router-dom
//npm install uuid
