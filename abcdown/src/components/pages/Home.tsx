import React from 'react';
import Header from '../layout/Header/Header';
import imageComunidade from '../layout/img_containers_cards/comunidade.png'
import imageTurmas from '../layout/img_containers_cards/turmas.png'
import ImageAtividade from '../layout/img_containers_cards/atividade.png'
import ImageSobreAbcdown from '../layout/img_containers_cards/logo.png'
import ImageCompartilhar from '../layout/img_containers_cards/compartilhar.png'
import ContainerCard from '../layout/container_card/ContainerCard'; // Verifique o caminho correto para o arquivo
import ContainerShareAbout from '../layout/container_card/ContainerShareAbout';
function Home() {
    return (
        <>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center', // Centralizar horizontalmente o conteúdo
                backgroundColor: '#f2f2f2', // Cor de fundo de exemplo
                width: '100%',

            }}>
                <Header title="Home" />


                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center', // Centralizar horizontalmente o conteúdo
                    justifyContent: 'space-around', // Distribuir espaço entre os elementos
                    width: '100%',
                    height: '100%',
                    //backgroundColor: 'pink',
                }}>

                    <ContainerCard
                        backgroundImage={imageComunidade}
                        width="90%"
                        height="200px"
                        text="Comunidade"
                        description="Obtenha atividades de outros professores"
                    />

                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: '100%',
                        height: 'max-content',
                        alignItems: 'center',
                        justifyContent: 'center',
                        //backgroundColor: 'red',
                        gap: '50px'
                    }}>
                        <ContainerCard
                            backgroundImage={imageTurmas}
                            width="40%"
                            height="300px"
                            text="Turmas"
                            description="crie,edite e selecione turmas"

                        />

                        <ContainerCard
                            backgroundImage={ImageAtividade}
                            width="50%"
                            height="300px"
                            text="Atividades"
                            description="acompanhe suas ativiadades"
                        />

                    </div>



                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: '100%',
                        height: 'max-content',
                        alignItems: 'center',
                        justifyContent: 'center',
                         backgroundColor: 'red',
                        gap: '50px'
                    }}>
                        <ContainerShareAbout
                            width="50%"
                            height="200px"
                            text="Sobre o ABCDown"
                            description="Conheça mais à respeito do nosso APP!"
                            // imageSrc={ImageSobreAbcdown}
                        />

                        <ContainerShareAbout
                            width="50%"
                            height="200px"
                            text="Compartilhar"
                            description="Gostou do ABCDown? Compartilhe com amigos!"
                            // imageSrc={ImageCompartilhar}
                        />
                    </div>


                </div>







            </div>
        </>
    );
}

export default Home;
