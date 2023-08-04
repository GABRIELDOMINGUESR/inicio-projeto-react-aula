// importacoes
import logo from './logo.svg';
//import './App.css';
import HelloWorld from './components/HelloWorld';
import Button from './components/Button';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa'
import Frase from './components/Frase'
import List from './components/List'
import Item from './components/Item'
import Evento from './components/Evento'
import Form from './components/Form'
import Condicional from './components/Condicional';
import OutraLista from './components/OutraLista';
import {useState} from 'react'
import SeuNome from './components/SeuNome';
import Saudacao from './components/Saudacao';
function App() {
  //aqui ficarao as criações das variaaveis

  // const name = 'guilherme';
  // const newName = name.toUpperCase();
  // function sum(a,b) {
  //   return a + b
  // }

  // const url = 'https://s2-techtudo.glbimg.com/Bxr-QA4_gL25CarCCxr9JQFybt8=/0x0:1024x609/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg';
  // const nome = "Lara"

  const meusItens = ['react','Vue','Angular']
  

  const [nome, setNome] = useState()
  return (
    // class é uma palavra reservada eintao className
    <div className="App"
    style={{
      // backgroundColor:'red',
      display:'flex',
      height:'100vh',
      width:'100%',
      alignItems:'center',
      flexDirection:'column'
    }}
    >
      

      {/* <h1>Olá react</h1> */}
      {/* <h1>Alterando JSX </h1>
    <p>ola {name} {newName}</p>
  <p>Soma: {2 + 2}</p>
  <p>Soma função{sum(5, 5)}</p> */}
      {/* <HelloWorld/> */}
      {/* <img src={url} alt="minha Imagem"/>
  <Button/> */}
      {/* <SayMyName nome= "Guilherme"/>
  <SayMyName nome= "Gabs"/>
  <SayMyName nome= {nome}/>

  <Pessoa 
    nome="Cristiano Ronaldo"
    idade="38"
    profissao="Jogador"
    foto="data:image/jpeg;base64,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"/>
    
    <Frase/>
    <List/>
    <Item marca= "Nike" ano_lancamento={1930}/>
  */}

      {/* <h1>Teste evento</h1>ß
      <Evento numero='1'/>
      <Evento numero='2'/> */}

      {/* <Form/> */}
      {/* <h1>TEstando Evento</h1>
      <Evento numero= "1"/> */}

      {/* <h1>Redenzizaçao condicional</h1>
      <Condicional /> */}
      {/* <h1>Renderização de lista</h1>
      <OutraLista itens= {meusItens}/>
      <OutraLista itens = {[]}/> */}


      <h1>State life</h1>
      <SeuNome setNome = {setNome}/>
      {nome}
      <Saudacao nome={nome}/>
    </div>
  );
}

export default App;
