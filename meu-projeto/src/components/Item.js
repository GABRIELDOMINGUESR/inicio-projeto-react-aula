// aqui temos o pacote
import PropTypes from 'prop-types'
// function Item(props) {
//     return (
//         <>
//         <li>
//             {props.marca}
//         </li>
//         </>
//     )
// }
function Item({marca, ano_lancamento}) {
    return (
        <>
        <li>
            {marca} - {ano_lancamento}
        </li>
        </>
    )
}

// aqui acessamos a propriade do componente da proprieda
Item.prototype = {
    // aqui estamos dizendo que será do tipo string e obrigatorio passar alguma coisa
    marca:PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number,
}

// defalt props
Item.defaltProps = {
    marca: 'Faltou marca',
    ano_lancamento: 0,
}
export default Item