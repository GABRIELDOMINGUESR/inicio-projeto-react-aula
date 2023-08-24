import React from 'react';
import DivRowLogin from '../layout/FormComponents/DivRowLogin/DivRowLogin';
import RegistrationInstructions from '../layout/FormComponents/RegistrationInstructions';
import Btn from '../layout/FormComponents/Btn';
import Input from '../layout/FormComponents/Input';
import BackgroundImageLogin from '../layout/loginImages/loginBackground.png';
import HeaderLogin from '../layout/FormComponents/HeaderLogin';
import GoogleLoginButton from '../layout/FormComponents/GoogleLoginButton';
import ImageGoogle from '../layout/loginImages/Google.png';
import { useState, useEffect } from 'react';
function Login() {
  const heightInput: string = '5vh';
  const heightButton: string = '6.5vh';
  const widthInput: string = '35vw';

  const leftSideContent = (
    <>
     <HeaderLogin /> 
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '3vh',
          height:'100%'
        }}
      >
        <RegistrationInstructions
          textTitulo="Login"
          textDescription="is simply dummy text of the printing and typesetting industry."
        />
        <GoogleLoginButton
          text="Entrar com o Google"
          imageSrc={ImageGoogle}
          width={widthInput}
          height={heightInput}
        />
        
        <Input text="Email" width={widthInput} height={heightInput} />
        <Input text="Senha:" width={widthInput} height={heightInput} />
        <Btn text="entrar" color="#43B1B1" width={widthInput} height={heightButton} />
      </div>
      </>

  );

  return (
  <>
     
    <DivRowLogin
      leftSideContent={leftSideContent}
      rightSideBackgroundImage={BackgroundImageLogin}
    />
    </>
  );
}

export default Login;
