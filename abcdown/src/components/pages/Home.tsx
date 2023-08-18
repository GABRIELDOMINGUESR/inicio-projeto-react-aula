import React from 'react';
import Header from '../layout/Header/Header';
import imageComunidade from '../layout/img_containers_cards/comunidade.png'
import imageTurmas from '../layout/img_containers_cards/turmas.png'
import ImageAtividade from '../layout/img_containers_cards/atividade.png'
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
                width="90%"
                height="200px"
                text=""
                description=""
                textClassName="custom-text"
                descriptionClassName="custom-description"/>

<ContainerCard
                backgroundImage={imageTurmas}
                width="40%"
                height="200px"
                text=""
                description=""
                textClassName="custom-text"
                descriptionClassName="custom-description"/>

<ContainerCard
                backgroundImage={ImageAtividade}
                width="40%"
                height="200px"
                text=""
                description=""
                textClassName="custom-text"
                descriptionClassName="custom-description"/>
            </div>
        </>
    );
}

export default Home;
