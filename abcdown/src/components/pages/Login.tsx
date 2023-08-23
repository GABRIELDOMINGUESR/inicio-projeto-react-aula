import RegistrationInstructions from "../layout/FormComponents/RegistrationInstructions";
import Btn from "../layout/FormComponents/Btn";
import Input from "../layout/FormComponents/Input";
import BackgroundImageLogin from "../layout/loginImages/loginBackground.png";
import HeaderLogin from "../layout/FormComponents/HeaderLogin";
import GoogleLoginButton from "../layout/FormComponents/GoogleLoginButton";
import ImageGoogle from "../layout/loginImages/Google.png";
import DivRowLogin from '../layout/FormComponents/DivRowLogin/DivRowLogin'

function Login() {
    const heightInput: string = '5vh';
    const heightButton: string = '6.5vh';
    const widthInput: string = '35vw'

  return (
    <div
      style={{
        backgroundColor: "#F0F0F0",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "100%", // Adicione uma vírgula aqui
        height: "100vh",
      }}
    >
      <div
        style={{
          // backgroundColor: 'red',
          display: "flex",
          flexDirection: "column",
          alignItems: "center",

          width: "60%",
          height: "100%",
        }}
      >
        <HeaderLogin />

        <div
          style={{
            // backgroundColor: 'red',
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            gap:'3vh'
           
          }}
        >
          <RegistrationInstructions
            textTitulo="Login"
            textDescription="is simply dummy text of the printing and typesetting industry."
          />
          <GoogleLoginButton
            text="Entrar com o Google"
            imageSrc={ImageGoogle}
            width={ widthInput}  height={heightInput}
          />
          <Input text="Nome" width={ widthInput}  height={heightInput}/>
          {/* <h1>separar</h1> */}
          <Input text="Senha:" width={ widthInput}  height={heightInput}/>

          <Btn text="entrar" color="#43B1B1"  width={ widthInput}  height={heightButton}/>
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url(${BackgroundImageLogin})`,
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          backgroundColor: "blue",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "40%",
          height: "100%",
        }}
      >
        {/* <h1>Imagem</h1> */}
      </div>
    </div>
  );
}

export default Login;
