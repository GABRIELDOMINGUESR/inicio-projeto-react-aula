import React from 'react';
function CustomSelect(){
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: 'white',
        justifyContent: 'space-between',
        width: '10vw',
        height: 'max-content',
        border: '1px solid #DDDDDD',
        padding: '0.5rem',
      }}
    >
      <label htmlFor="ordenar">Ordenar</label>
      <select id="ordenar" style={{
        border: 'none',
        outline: 'none',
      }}>
        <option value=""></option>
        <option key="1" value="1">Opção 1</option>
        <option key="2" value="2">Opção 2</option>
        <option key="3" value="3">Opção 3</option>
        {/* Adicione mais opções conforme necessário */}
      </select>
    </div>
  );
}

export default CustomSelect;
