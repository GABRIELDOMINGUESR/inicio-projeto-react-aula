import Message from "../layout/Message";
import { useLocation, json } from "react-router-dom";
import React, { useState, useEffect } from "react"; // Importe o useState do React

import styles from "./Projects.module.css";
import Container from "../layout/Container";
import LinkButton from "../layout/LinkButton";
import ProjectCards from "../projects/ProjectCards";
import Loading from '../layout/Loading'
function Projects() {
  const [projects, setProjects] = useState([]);
  const [removeLoading,setRemoveLoading] = useState(false);
  const location = useLocation(); //  a partir de agora consigo pegar o history do NewProject
  let message = "";
  if (location.state) {
    message = location.state.message;
  }

  useEffect(() => {
  setTimeout(()=>{
    fetch("http://localhost:5000/projects", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProjects(data);
        console.log(data);
        setRemoveLoading(true)
      })
      .catch((err) => console.log(err));
  },3000)
  }, []); // controlando um array vazio
  return (
    <div className={styles.project_container}>
      {/* <h1>Meus Projetos</h1> */}
      <div className={styles.title_container}>
        <h1>Meus Projetos</h1>
        {/* <a href="#">novo projeto</a> */}
        <LinkButton to="/newproject" text=" criar Novo Projeto" />
      </div>
      {message && <Message type="success" msg={message} />}
      <Container customClass="start">
        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCards
              name={project.name}
              id={project.id}
              budget={project.budget}
              category={project.categories.name}
              key={project.id}
            />
          ))} 
          {!removeLoading && <Loading/>}
          {removeLoading && projects.length === 0 && (
            <p>Não há projetos</p>
          )}
      </Container>
    </div>
  );
}

export default Projects;
