import Message from "../layout/Message";
import { useLocation } from "react-router-dom";
import styles from "./Projects.module.css";
import Container from "../layout/Container";
import LinkButton from "../layout/LinkButton"
function Projects() {
  const location = useLocation(); //  a partir de agora consigo pegar o history do NewProject
  let message = "";
  if (location.state) {
    message = location.state.message;
  }
  return (
    <div className={styles.project_container}>
      {/* <h1>Meus Projetos</h1> */}
      <div className={styles.title_container}>
        <h1>Meus Projetos</h1>
        {/* <a href="#">novo projeto</a> */}
        <LinkButton to="/newproject" text=" criar Novo Projeto"/>

      </div>
      {message && <Message type="success" msg={message} />}
      <Container customClass="start">
        <p>Projetos</p>
      </Container>
    </div>
  );
}

export default Projects;
