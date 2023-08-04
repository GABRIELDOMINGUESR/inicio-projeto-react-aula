import {useState} from 'react'

function Condicional() {
const [email,setemail] = useState()
const [userEmail,setUserEmail] = useState()
    function enviarEmail(e) {
        e.preventDefault()
        console.log("Formulario enviado ao click")
        setUserEmail(email)
        console.log(userEmail)
    }

    function limparEmail() {
        setemail('')

    }

    return (
        <>
        <h2>Cadastre o seu e-mail</h2>
        <form>
            <input type="text" placeholder='Digite seu email' onChange={(e)=> setemail(e.target.value)}></input>
            <button onClick={enviarEmail}>Enviar e-mail</button>
            {/* {userEmail} */}
{/* se user email e veridadeiro cria uma div */}
            {userEmail &&(
                <div>o email é: {userEmail}
                <button onClick={limparEmail}>LImpar eEmail</button>

                </div>
                
           )} 
        </form>
        
        
        </>
    )

}

export default Condicional