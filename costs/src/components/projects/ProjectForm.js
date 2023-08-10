import { useState, useEffect } from "react";
import styles from "./ProjectForm.module.css";
import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";

function ProjectForm({ handleSubmit, btnText, projecData }) {
  const [categories, setCategories] = useState([]);
  const [project, setProject] = useState(projecData || {});

  useEffect(() => {
    fetch("http://localhost:5000/category", {
      method: "GET",
      headers: {
        "Content-Type": "Application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => console.error(err));
  }, []);

  const submit = (e) => {
    e.preventDefault();
    console.log(project);
    handleSubmit(project);
  };

  function hadleChange(e) {
    setProject({ ...project, [e.target.name]: e.target.value });
    console.log(project);
  }

  function hadleCategory(e) {
    setProject({
      ...project,
      categories: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    });
  }
  return (
    <form onSubmit={submit} className={styles.form}>
      {/* <div>
        <input type="text" placeholder="insira o nome do projeto" />
      </div> */}
      <Input
        type="text"
        text="nome do projeto"
        name="name"
        placeholder="nome Do projeto"
        handleOnChange={hadleChange}
        value={project.name ? project.name : ''}
      />

      <Input
        type="number"
        text="Orçamento do Projeto"
        name="budget"
        placeholder="insira o orçameno total"
        handleOnChange={hadleChange}
        value={project.budget ? project.budget: ''}

      />

      {/* 
      <div>
        <select name="category_id">
          <option disabled>Selecione a categoria</option>
        </select>
      </div> */}

      <Select
        name="category_id"
        text="Selecione a caragoria"
        options={categories}
        handleOnChange={hadleCategory}
        value={project.categories ? project.categories.id : ''}
      />
      {/* <div>
          <input type="submit" value="Criar Projeto"/>
      </div> */}
      <SubmitButton text={btnText} />
    </form>
  );
}
export default ProjectForm;
