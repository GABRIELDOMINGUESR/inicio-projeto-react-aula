import Message from "../layout/Message";
import { useLocation, json } from "react-router-dom";
import React, { useState, useEffect } from "react"; // Importe o useState do React

import styles from "./Projects.module.css";
import Container from "../layout/Container";
import LinkButton from "../layout/LinkButton";
import ProjectCards from "../projects/ProjectCards";

function Projects() {
  const [projects, setProjects] = useState([]);

  const location = useLocation(); //  a partir de agora consigo pegar o history do NewProject
  let message = "";
  if (location.state) {
    message = location.state.message;
  }

  useEffect(() => {
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
      })
      .catch((err) => console.log(err));
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
      </Container>
    </div>
  );
}

export default Projects;
