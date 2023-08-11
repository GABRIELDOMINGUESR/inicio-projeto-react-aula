import styles from "./Mensage.module.css";
import { useState, useEffect } from "react";

function Message({ type, msg }) {
  // type(sucesso opu erross)
  const [visible, setVisible] = useState(false); //começa falso, nao comessa exibindo

  useEffect(() => {
    // poder mudar a exibixao dependendo da condicao
    if (!msg) {
      setVisible(false);
      return
    }
    setVisible(true)

    const timer = setTimeout(() => {
      // apos 3 segundo a visibilidade e apagada novamente
      setVisible(false)
    }, 3000)

    return () => clearTimeout(timer) //precisa retorna algo
  }, [msg]) // usse efect ligado a mensagwem
  return ( 
    <>
      {visible && ( // se for visible exibe a div
        <div className={`${styles.message} ${styles[type]}`}>{msg}</div> //classe dinasmicsa
      )}
    </>
  );
}

export default Message;
