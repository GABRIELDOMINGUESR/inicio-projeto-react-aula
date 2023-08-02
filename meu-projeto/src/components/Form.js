
// O uso de e.preventDefault() em JavaScript, como visto no código fornecido, interrompe o comportamento padrão de um evento, como a 
// submissão de um formulário. No contexto de um formulário, ao chamar e.preventDefault() dentro de uma função de tratamento de evento, 
// você impede que o navegador envie os dados do formulário ao servidor, permitindo que você execute ações personalizadas, como validações
//  ou atualizações no estado, antes de prosseguir com o comportamento padrão.
function Form() {
    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log('cadastrou o usuario');


    }
    return(
        <>
            <h1>Meu cadastro</h1>
            <form onSubmit= {cadastrarUsuario}>
                <div>
                    <input type="text" placeholder="Digite seu nome"></input>                    
                </div>
                <div>
                    <input type="submit" value="cadastrar"></input>
                </div>
            </form>
        </>
    )
}

export default Form