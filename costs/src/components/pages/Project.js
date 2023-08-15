import styles from "./Project.module.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from '../layout/Loading'
import Container from '../layout/Container'
import ProjectForm from "../projects/ProjectForm";
function Project() {
  const { id } = useParams();
  console.log(id); // pegar id da url
  const [project, setProject] = useState([]);
  const [showProjectForm, setshowProjectForm] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:5000/projects/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((resp) => resp.json()) // Corrigido: adicionar () após resp.json
        .then((data) => {
          setProject(data);
          console.log(data);
        })
        .catch((err) => console.log(err)); // Corrigido: alterar "err" para "erro"
    }, 3000)
  }, [id]);


  function editPos(project) {
    console.log(project)
    if (project.budget < project.cost) {
      //mensagem
    }
    fetch(`http://localhost:5000/projects/${project.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project)
    }).then(resp => resp.json())
      .then(data => { 
        console.log(data)
        setProject(data)
        setshowProjectForm(false)
      })
      .catch(err => { console.log(err) })

  }
  function toggleProjectForm() {
    setshowProjectForm(!showProjectForm)
  }

  return (
    <>
      {project.name ? (
        <div className={styles.project_details}>
          <Container customClass="column">

            <div className={styles.details_container}>
              <h1>Projeto: {project.name}</h1>
              <button className={styles.btn} onClick={toggleProjectForm}>
                {!showProjectForm ? 'Editar projeto' : 'Fechar'}
              </button>
              {!showProjectForm ? (
                <div className={styles.project_form}>
                  <p>
                    <span>Categoria:</span> {project.categories.name}
                  </p>
                  <p>
                    <span>Total do orçamento:</span> R${project.budget}
                  </p>
                  <p>
                    <span>Total utilizado:</span> R${project.cost}
                  </p>
                </div>
              ) : (
                  <div className={styles.project_info}>
                    <ProjectForm handleSubmit={editPos} btnText={"Concluir edição"} projecData={project} />
                  </div>
                )}
            </div>
          </Container>
        </div>

      ) : (
          <Loading />
        )}
    </>
  )
}
export default Project;
