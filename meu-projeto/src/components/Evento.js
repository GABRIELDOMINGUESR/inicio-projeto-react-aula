import Button from './evento/Button'

// function Evento({numero}) {

//     function meuEvento() {
//         console.log(`Fui ativado ${numero}`)
//     }
//     return(
//         <>
//             <div>
//                 <p> Click para ativar o evento</p>
//                 <Button event={meuEvento} text="Primeiro Evento"/>

//                 <button onClick= {meuEvento} >Ativar</button>
            
//             </div>
//         </>
//     )
// }


function Evento({}) {

    function meuEvento() {
        console.log(`Opa fui ativado `)
    }

    function segundoEvento() {
        console.log('Segundo evento')
    }
    return(
        <>
            <div>
                <p> Click para ativar o evento</p>
                <Button event={meuEvento} text="Primeiro Evento"/>
                <Button event = {segundoEvento} text="Segundo Evento"/>
            
            </div>
        </>
    )
}

export default Evento