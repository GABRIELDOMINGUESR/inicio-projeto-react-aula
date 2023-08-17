import React from 'react';
import Header from '../layout/Header/Header';
import imageComunidade from '../layout/img_containers_cards/comunidade.png'

import ContainerCard from '../layout/container_card/ContainerCard'; // Verifique o caminho correto para o arquivo
function Home() {
    return (
        <>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center', // Centralizar horizontalmente o conteúdo
                backgroundColor: '#f2f2f2', // Cor de fundo de exemplo
                width:'100%'
            }}>
                <Header title="Home" />
                
                <ContainerCard
                backgroundImage={imageComunidade}
                width="300px"
                height="200px"
                text="Título do Container"
                description="Uma descrição do container."
                textClassName="custom-text"
                descriptionClassName="custom-description"/>
            </div>
        </>
    );
}

export default Home;
