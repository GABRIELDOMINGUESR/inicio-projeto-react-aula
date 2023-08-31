// {
//     "id_professor": 1,
//     "nome": "John Doe",
//     "email": "john@example.com",
//     "cpf": "123.456.789-00",
//     "data_nascimento": "1990-01-15",
//     "foto": "https://example.com/john.jpg",
//     "senha": "hashed_password",
//     "id_genero": 1
// },
// {
//     "id_professor": 2,
//     "nome": "Jane Smith",
//     "email": "jane@example.com",
//     "cpf": "987.654.321-00",
//     "data_nascimento": "1985-05-20",
//     "foto": "https://example.com/jane.jpg",
//     "senha": "hashed_password",
//     "id_genero": 2
// }
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Btn from "../layout/FormComponents/Btn";
import HeaderLogin from "../layout/FormComponents/HeaderLogin";
import RegistrationInstructions from "../layout/FormComponents/RegistrationInstructions";
import Input from "../layout/FormComponents/Input";
import GetImage from "../layout/FormComponents/imageGetImage/getImage.svg";

interface UserDataSectionProps {
  proceedToLoginData: (userData: UserData) => void;
}

interface UserData {
  nome: string;
  sexo: string;
  cpf: string;
  dataNascimento: string;
  cep: string;
  endereco: string;
  bairro: string;
  estado: string;
  numero: string;
}

interface Option {
  id_genero: number;
  nome_genero: string;
}
function UserDataSection({ proceedToLoginData }: UserDataSectionProps) {
  const heightInput: string = "4vh";
  const heightButton: string = "6.5vh";
  const widthInputleft: string = "27vw";
  const widthInputfullAddress: string = "15vw";
  const widthInputright: string = "15vw";
  const userProfile: string = "23vw";

  const widthBtnRigth: string = "15vw";
  const widthBtnLeft: string = "30vw";

  const [nome, setNome] = useState("");
  const [sexo, setSexo] = useState(""); // Certifique-se de definir a interface Genero

  const [options, setOptions] = useState<Option[]>([]);

  const [cpf, setCpf] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [bairro, setBairro] = useState("");
  const [estado, setEstado] = useState("");
  const [numero, setNumero] = useState("");
  // const [userDataComplete, setUserDataComplete] = useState(false);
  const [isValidCep, setIsValidCep] = useState(false);

  const checkUserDataCompletion = () => {
    if (
      nome &&
      sexo &&
      cpf &&
      dataNascimento &&
      cep &&
      endereco &&
      bairro &&
      estado &&
      numero
    ) {
      const userData: UserData = {
        nome,
        sexo,
        cpf,
        dataNascimento,
        cep,
        endereco,
        bairro,
        estado,
        numero,
      };

      const professorData = {
        ...userData,
        email: "", // Fill in the email value
        password: "", // Fill in the password value
        photo: "", // Fill in the photo value
      };

      proceedToLoginData(professorData);
      console.log(professorData);
    } else {
      console.log("Preencha todos os campos");
    }
  };

  const handleInputClick = async () => {
    // validateCepLength()
    // Call the function to handle input changes here
    // Example: handleInputChange("nome", "John");
    checkUserDataCompletion(); // Validate the inputs
  };

  const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCep = e.target.value; // Obtém o novo valor do CEP
    const numericCep = newCep.replace(/\D/g, ""); // Remove caracteres não numéricos

    setCep(numericCep);

    console.log(cep);
  };
  const validateCep = async () => {
    try {
      const isValid = await fetchCepData();
      if (isValid) {
        console.log("CEP válido");
        return true;
      } else {
        console.log("CEP inválido");
        return false;
      }
    } catch (error) {
      console.log("Erro ao buscar o endereço:", error);
      return false;
    }
  };

  const fetchCepData = async () => {
    const apiUrl = `http://localhost:3001/api/cep/${cep}`;
    try {
      const response = await fetch(apiUrl);

      if (response.ok) {
        const data = await response.json();
        if (!data.erro) {
          console.log(data);
          setBairro(data.bairro);
          setEstado(data.uf);
          setEndereco(data.logradouro);
          return true; // CEP is valid
        } else {
          console.log(
            "CEP inválido: Ocorreu um erro ao buscar dados do ViaCEP."
          );
          return false; // CEP is invalid
        }
      } else {
        console.log("CEP inválido: Ocorreu um erro na requisição.");
        return false; // CEP is invalid due to request error
      }
    } catch (error) {
      console.log("Erro ao buscar o endereço:", error);
      return false; // CEP is invalid due to error
    }
  };

  useEffect(() => {
    if (cep) {
      validateCep();
    }
  }, [cep]);
  const clearInputs = () => {
    setNome(""); // Limpa o conteúdo do input nome
    // Limpar outros estados, se necessário
    setSexo("");
    setCpf("");
    setDataNascimento("");
    setCep("");
    setEndereco("");
    setBairro("");
    setEstado("");
    setNumero("");
  };

  useEffect(() => {
    // Fazer a solicitação GET para obter as opções de gênero
    fetch("http://localhost:5000/tbl_genero", {
      method: "GET",
      headers: { Accept: "application/json" },
    }) // Substitua pela URL correta
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        //  setGeneros(data.tbl_genero);
        setOptions(data);
      })
      .catch((error) => {
        console.error("Erro ao buscar os gêneros:", error);
      });
  }, []);

  const userData = {
    nome: nome,
    cpf: cpf,
    dataNascimento: dataNascimento,
    cep: cep,
    endereco: endereco,
    bairro: bairro,
    estado: estado,
    numero: numero,
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        backgroundColor: "white",
      }}
    >
      <HeaderLogin />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5vh",
          width: "max-content",
          // alignItems: 'center',
          // justifyContent:'center'
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            // backgroundColor: 'black'
          }}
        >
          <RegistrationInstructions
            textTitulo="Crie uma conta agora!"
            textDescription="Precisamos de algumas informações sobre você, para que você possa acessar nossa plataforma"
          />
        </div>

        <span
          style={{
            fontWeight: "bold",
            fontSize: "1vw",
            marginTop: "5%",
            marginBottom: "1%",
          }}
        >
          Parte 1
        </span>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            // backgroundColor: 'red'
          }}
        >
          <Input
            text="nome"
            width={widthInputleft}
            height={heightInput}
            value={nome} // Fornecer o valor do estado
            onChange={(e) => setNome(e.target.value)}
          />

          {/* <Input
                        text="sexo"
                        width={widthInputright}
                        height={heightInput}
                        value={sexo} // Fornecer o valor do estado
                        onChange={(e) => setSexo(e.target.value)}
                    /> */}

          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <label>Sexo:</label>
            <select
              onChange={(e) => setSexo(e.target.value)}
              style={{
                width: widthInputright,
                height: heightInput,
                borderRadius: "40px",
                borderColor: "#C9C9C9",
                borderWidth: "1px",
                borderStyle: "solid",
                outline: "none",
                paddingLeft: "10px",
                lineHeight: "24px",
              }}
            >
              <option value=""></option>
              {options.map((option) => (
                <option key={option.id_genero} value={option.nome_genero}>
                  {option.nome_genero}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            // backgroundColor: 'red'
          }}
        >
          <Input
            text="cpf"
            width={userProfile}
            height={heightInput}
            value={cpf} // Fornecer o valor do estado
            onChange={(e) => setCpf(e.target.value)}
          />

          <Input
            text="data nascimento"
            width={userProfile}
            height={heightInput}
            value={dataNascimento} // Fornecer o valor do estado
            onChange={(e) => setDataNascimento(e.target.value)}
            type="date"
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            // backgroundColor: 'red'
          }}
        >
          <Input
            text="CEP"
            width={userProfile}
            height={heightInput}
            value={cep} // Fornecer o valor do estado
            onChange={handleCepChange}
          />
          <Input
            text="Endereco"
            width={userProfile}
            height={heightInput}
            value={endereco} // Fornecer o valor do estado
            onChange={(e) => setEndereco(e.target.value)}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            // backgroundColor: 'pink',
            paddingBottom: "10%",
          }}
        >
          <Input
            text="Estado"
            width={widthInputfullAddress}
            height={heightInput}
            value={estado} // Fornecer o valor do estado
            onChange={(e) => setEstado(e.target.value)}
          />
          <Input
            text="Bairro"
            width={widthInputfullAddress}
            height={heightInput}
            value={bairro} // Fornecer o valor do estado
            onChange={(e) => setBairro(e.target.value)}
          />

          <Input
            text="Numero"
            width={widthInputfullAddress}
            height={heightInput}
            value={numero} // Fornecer o valor do estado
            onChange={(e) => setNumero(e.target.value)}
          />
        </div>
        <div
          style={{
            display: "flex",
            // backgroundColor: 'black',
            justifyContent: "space-between",
            flexDirection: "row",
            width: "100%",
          }}
        >
          <Btn
            text="Limpar"
            color="#F0754E"
            width={widthBtnRigth}
            onClick={clearInputs}
          />
          <Btn
            onClick={handleInputClick}
            text="Avança para schoolData"
            color="#43B1B1"
            width={widthBtnLeft}
          />
        </div>
      </div>
    </div>
  );
}

function LoginDataSection({ userData }: { userData: UserData | null }) {
  const heightInput: string = "4vh";
  const heightButton: string = "6.5vh";
  const widthInputleft: string = "27vw";
  const widthInputfullAddress: string = "15vw";
  const widthInputright: string = "15vw";
  const userProfile: string = "23vw";

  const widthBtnRigth: string = "15vw";
  const widthBtnLeft: string = "30vw";
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmEmail, setComfirmEmail] = useState("");
  const [comfirmpassword, setComfirmPassword] = useState("");

  const requestData = {
    professor: {
      email: email,
      password: password,
      photo: selectedPhoto,
      nome: userData?.nome || "",
      sexo: userData?.sexo || "",
      cpf: userData?.cpf || "",
      dataNascimento: userData?.dataNascimento || "",
      cep: userData?.cep || "",
      endereco: userData?.endereco || "",
      bairro: userData?.bairro || "",
      estado: userData?.estado || "",
      numero: userData?.numero || "",
    },
  };
  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedPhoto(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const navigate = useNavigate();
  function CreatePost() {
    // professor.cost = 0
    // professor.service = []

    fetch("http://localhost:5000/professor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then((resp) => resp.json)
      .then((data) => {
        console.log(data);
        navigate("/login", {
          state: { message: "usuario criado com sucesso!" },
        });
      })
      .catch((err) => console.log(err));
  }

  const handleDivClick = () => {
    const fileInput = document.getElementById(
      "hiddenFileInput"
    ) as HTMLInputElement;
    if (fileInput) {
      fileInput.click();
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", backgroundColor: "white", }}>
      <HeaderLogin />
      <div style={{
        display: "flex", flexDirection: "column", width: "max-content",// alignItems: 'center',// justifyContent:'center'
      }}>
        <RegistrationInstructions
          textTitulo="Crie uma conta agora!"
          textDescription="Estamos quase lá!
        Preencha o restante das suas informações para finalizarmos"
        />

        <span style={{ fontWeight: "bold", fontSize: "1vw", marginTop: "4%", }}>
          Parte 3
        </span>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", backgroundColor: "white", }}>
          {/* ... Rest of your code ... */}

          <div style={{ height: "30vh", width: "20vw", borderRadius: "30px", border: "3px solid #EAEAEA", backgroundColor: "#F5F5F5", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", }}
            onClick={handleDivClick}>
            {selectedPhoto ? (
              <img
                src={selectedPhoto}
                alt="Selected"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            ) : (
              <img src={GetImage} alt="Descrição da imagem" style={{ width: "30%", height: "30%" }} />
            )}
          </div>

          <input
            type="file" id="hiddenFileInput" accept="image/*" style={{ display: "none" }} onChange={handlePhotoChange}
          />
          <div style={{ display: "flex", flexDirection: "column", padding: "5% 0 7% 0", gap: "2vh", }}>
            <div style={{
              display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "100%",
              // backgroundColor: 'red'
            }}>
              <Input text="E-mail*" width={widthInputleft} height={heightInput} type="email" onChange={(e) => setEmail(e.target.value)} />
              <Input text="Senha*" width={widthInputright} height={heightInput} type="password" onChange={(e) => setPassword(e.target.value)} />
            </div>

            <div style={{
              display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "100%",
              // backgroundColor: 'red'
            }}>
              <Input
                text="Confirmação do e-mail*"
                width={widthInputleft}
                height={heightInput}
                type="email"
                onChange={(e) => setComfirmEmail(e.target.value)}
              />
              <Input text="Confirmação de senha*" width={widthInputright} height={heightInput} type="password" onChange={(e) => setComfirmPassword(e.target.value)} />
            </div>
          </div>

          <div
            style={{
              display: "flex",
              // backgroundColor: 'black',
              justifyContent: "space-between",
              flexDirection: "row",
              width: "100%",
            }}
          >
            <Btn text="Voltar" color="#F0754E" width={widthBtnRigth} />
            <Btn
              text="Mandar"
              color="#43B1B1"
              width={widthBtnLeft}
              onClick={CreatePost}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function CreateACount() {
  const [createCoute, setCreateCoute] = useState("userData");
  const [userData, setUserData] = useState<UserData | null>(null);
  const proceedToLoginData = (userData: UserData) => {
    setUserData(userData); // Set the userData received from UserDataSection
    setCreateCoute("loginData");

  };

  return (
    <>
      {createCoute === "userData" ? (
        <UserDataSection proceedToLoginData={proceedToLoginData} />
      ) : (
        <LoginDataSection userData={userData} />
      )}
    </>
  );
}

export default CreateACount;
