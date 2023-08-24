
import BackgroundImageResetPassword from '../layout/loginImages/resetPassword.png';
import DivRowLogin from '../layout/FormComponents/DivRowLogin/DivRowLogin';
import HeaderLogin from '../layout/FormComponents/HeaderLogin';
import Input from '../layout/FormComponents/Input';
import Btn from '../layout/FormComponents/Btn';
import RegistrationInstructions from '../layout/FormComponents/RegistrationInstructions';





function ResetPassword() {
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
          textTitulo="Redefinir senha"
          textDescription="Por favor, digite o endereço de e-mail utilizado no cadastro"
        />
<Input text="Email" width={widthInput} height={heightInput} />
         <Btn text="entrar" color="#43B1B1" width={widthInput} height={heightButton} />
</div>


        </>
    )
    return (
        <>
           
          <DivRowLogin
            leftSideContent={leftSideContent}
             rightSideBackgroundImage={BackgroundImageResetPassword }

          /> 

          </>
        );
}

export default ResetPassword