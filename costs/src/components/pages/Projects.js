import Message from "../layout/Message";
import { useLocation } from "react-router-dom";

function Projects() {
  const location = useLocation(); //  a partir de agora consigo pegar o history do NewProject
  let message =''
  if(location.state) {
    message = location.state.message
  }
  return (
    <div>
      <h1>Meus Projetos</h1>
     {message &&<Message type="success" msg={message} />}

    </div>
  );
}

export default Projects;
