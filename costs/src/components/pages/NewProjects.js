import { useNavigate } from "react-router-dom";
import styles from "./NewProjects.module.css";
import ProjectForm from "../projects/ProjectForm";


function NewProject() {
  const navigate = useNavigate(); // Use useNavigate

  function createPost(project) {
    // initialize cost and serveice
    project.cost = 0;
    project.services = [];

    fetch("http://localhost:5000/projects", {
      method: "POST",
      headers: { "Content-type": "application/json",
    
    },
    body:JSON.stringify(project),
    })
    .then((resp) => resp.json())
    .then((data)=> {
        console.log(data)
        navigate('/projects', { state: { message: "Projeto criado com sucesso!" } });
      })
    .catch((err) => console.log(err))
  }
  return (
    <div className={styles.newproject_container}>
      <h1>Criar Projeto</h1>
      <p>Crie projeto para deposi adicio0nar serviçoes</p>
      <ProjectForm handleSubmit={createPost} btnText="criar projeto" />
    </div>
  );
}
export default NewProject;
