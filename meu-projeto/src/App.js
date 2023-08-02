// importacoes
import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import Button from './components/Button';
import SayMyName from './components/SayMyName';

function App() {
  //aqui ficarao as criações das variaaveis

  const name = 'guilherme';
  const newName = name.toUpperCase();
  function sum(a,b) {
    return a + b
  }

  const url = 'https://s2-techtudo.glbimg.com/Bxr-QA4_gL25CarCCxr9JQFybt8=/0x0:1024x609/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg';
  const nome = "Lara"
  
  return (
    // class é uma palavra reservada eintao className
    <div className="App">
    
      {/* <h1>Olá react</h1> */}
  {/* <h1>Alterando JSX </h1>
    <p>ola {name} {newName}</p>
  <p>Soma: {2 + 2}</p>
  <p>Soma função{sum(5, 5)}</p> */}
   <HelloWorld/>
  {/* <img src={url} alt="minha Imagem"/>
  <Button/> */}
  <SayMyName nome= "Guilherme"/>
  <SayMyName nome= "Gabs"/>
  <SayMyName nome= {nome}/>
    </div>
  );
}

export default App;
