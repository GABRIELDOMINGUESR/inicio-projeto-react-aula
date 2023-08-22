import RegistrationInstructions from "../layout/FormComponents/RegistrationInstructions";
import Btn from '../layout/FormComponents/Btn';
import Input from '../layout/FormComponents/Input'
import BackgroundImageLogin from '../layout/loginImages/loginBackground.png'
import HeaderLogin from '../layout/FormComponents/HeaderLogin'
import GoogleLoginButton from '../layout/FormComponents/GoogleLoginButton'
import ImageGoogle from '../layout/loginImages/Google.png'




function Login() {
    return (
        <div style={{
            backgroundColor: '#F0F0F0',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%', // Adicione uma vírgula aqui
            height: '100vh'
        }}>
            <div style={{
                backgroundColor: 'red',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '60%',
                height:'100%'

            }}>
                < HeaderLogin/>
                <GoogleLoginButton text="Entrar com o Google" imageSrc={ImageGoogle} width="50%" />

                <RegistrationInstructions textTitulo="Login" textDescription="is simply dummy text of the printing and typesetting industry." />

                <Input text="Nome" width="50%" />
                <h1>separar</h1>
                <Input text="Senha:" width="50%" />



                <Btn text="entrar" color="#43B1B1" width="50%" height="max-content" />

            </div>


            <div style={{
                 backgroundImage: `url(${BackgroundImageLogin})`,
                 backgroundSize: '100% 100%',
                 backgroundPosition: 'center',
                backgroundColor: 'blue',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent:'center',
                width: '40%',
                height:'100%'

            }}>
                {/* <h1>Imagem</h1> */}
            </div>
        </div>
    );
}

export default Login;
