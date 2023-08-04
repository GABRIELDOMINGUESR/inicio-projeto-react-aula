import Item from "./Item"

function OutraLista ( {itens}) {
return (
<>
<div 
style= {{
    display:"flex",
    flexDirection:"column"
}}
>
<h3
        style={
            {
                backgroundColor: 'gray',
                width:'max-content',
               height:'max-content'
            }
        }
    >
        Lista de coisas boas</h3>
    {itens.length > 0 ? (
       itens.map((item, index )=> (
       <p key = {index}>{item}</p>
       ))): (
           <p>Não há itens na lista</p>
)}
</div>

</>

)

}

export default OutraLista