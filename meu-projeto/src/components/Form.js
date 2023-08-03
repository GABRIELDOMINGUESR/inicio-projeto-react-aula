
// O uso de e.preventDefault() em JavaScript, como visto no código fornecido, interrompe o comportamento padrão de um evento, como a 
// submissão de um formulário. No contexto de um formulário, ao chamar e.preventDefault() dentro de uma função de tratamento de evento, 
// você impede que o navegador envie os dados do formulário ao servidor, permitindo que você execute ações personalizadas, como validações
//  ou atualizações no estado, antes de prosseguir com o comportamento padrão.


//trabalhando com estados -> 
import {useState} from 'react'

function Form() {
    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log(name)
        console.log(password)
        console.log(`Usuário ${name} cadastrado com a senha ${password}`)
        console.log('cadastrou o usuario');

    }

    const [name,setName] = useState()
    const [password,setSenha] = useState()   


    //nome do atributo que vou resgatar 
    // setName o que vou alterar para 
    return (
        <>
            <h1>Meu cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Digite seu nome"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="password">Senha</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Digite sua senha"
                        onChange={(e) => setSenha(e.target.value)}
                    />
                </div>

                <div>
                    <input type="submit" value="cadastrar" />
                </div>
            </form>
        </>
    );
}

export default Form;




