import React, { useState } from "react";
import Btn from '../layout/FormComponents/Btn';
import HeaderLogin from '../layout/FormComponents/HeaderLogin';
import RegistrationInstructions from '../layout/FormComponents/RegistrationInstructions';
import Input from '../layout/FormComponents/Input';

interface UserDataSectionProps {
    proceedToSchoolData: () => void;
}

function UserDataSection({ proceedToSchoolData }: UserDataSectionProps) {
    const heightInput: string = '5vh';
    const heightButton: string = '6.5vh';
    const widthInput: string = '35vw';
    return (
        <div>
            <HeaderLogin />
            <RegistrationInstructions
                textTitulo="Crie uma conta agora!"
                textDescription="Precisamos de algumas informações sobre você, para que você possa acessar nossa plataforma"
            />


            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: "100%",
                    backgroundColor: 'red'
                }}
            >
                <Input
                    text="nome"
                    width={widthInput}
                    height={heightInput}
                />
                <Input
                    text="sexo"
                    width={widthInput}
                    height={heightInput}
                />
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: "100%",
                    backgroundColor: 'red'
                }}
            >
                <Input
                    text="cpf"
                    width={widthInput}
                    height={heightInput}

                />

                <Input
                    text="data nascimento"
                    width={widthInput}
                    height={heightInput}

                />
            </div>






            <Input
                text="CEP"
                width={widthInput}
                height={heightInput}

            />

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: "100%",
                    backgroundColor: 'red'
                }}
            >
                <Input
                    text="Endereco"
                    width={widthInput}
                    height={heightInput}

                />

                <Input
                    text="Bairro"
                    width={widthInput}
                    height={heightInput}

                />

            </div>


            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: "100%",
                    backgroundColor: 'red'
                }}
            >
                <Input
                    text="Estado"
                    width='3vw'
                    height='3vh'
                />

                <Input
                    text="Logradouro"
                    width='3vw'
                    height='3vh'

                />
                <Input
                    text="Numero"
                    width='3vw'
                    height='3vh'

                />

            </div>

            <Btn onClick={proceedToSchoolData} text="Avança para schoolData" color="#43B1B1" />

            <Btn onClick={proceedToSchoolData} text="Voltar" color="#F0754E" />

        </div>
    );
}

interface SchoolDataSectionProps {
    proceedToLoginData: () => void;
}

function SchoolDataSection({ proceedToLoginData }: SchoolDataSectionProps) {
    const heightInput: string = '5vh';
    const heightButton: string = '6.5vh';
    const widthInput: string = '35vw';
    return (
        <div>
            <RegistrationInstructions
                textTitulo="Crie uma conta agora!"
                textDescription="Por favor, agora preencha com os dados da instituição onde você leciona para continuar"
            />

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: "100%",
                    backgroundColor: 'red'
                }}
            >
                <Input
                    text="Nome da instituição"
                    width={widthInput}
                    height={heightInput}
                />
                <Input
                    text="E-mail*"
                    width={widthInput}
                    height={heightInput}
                />
            </div>


            <Input
                text="CEP"
                width={widthInput}
                height={heightInput}

            />

            <Btn onClick={proceedToLoginData} text="Avança para loginData" color="#43B1B1" />
        </div>
    );
}

function LoginDataSection() {
    return (
        <div>
            <HeaderLogin />
            <RegistrationInstructions
                textTitulo="Crie uma conta agora!"
                textDescription="Estamos quase lá!
        Preencha o restante das suas informações para finalizarmos"
            />
        </div>
    );
}

function CreateACount() {
    const [createCoute, setCreateCoute] = useState('userData');

    const proceedToSchoolData = () => {
        setCreateCoute('schoolData');
    }

    const proceedToLoginData = () => {
        setCreateCoute('loginData');
    }

    return (
        <>
            {createCoute === "userData" ? (
                <UserDataSection proceedToSchoolData={proceedToSchoolData} />
            ) : createCoute === "schoolData" ? (
                <SchoolDataSection proceedToLoginData={proceedToLoginData} />
            ) : (
                        <LoginDataSection />
                    )}
        </>
    );
}

export default CreateACount;
