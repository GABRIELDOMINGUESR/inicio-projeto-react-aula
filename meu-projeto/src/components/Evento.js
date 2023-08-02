function Evento({numero}) {

    function meuEvento() {
        console.log(`Fui ativado ${numero}`)
    }
    return(
        <>
            <div>
                <p> Click para ativar o evento</p>
                <button onClick= {meuEvento} >Ativar</button>
            
            </div>
        </>
    )
}

export default Evento