import { useState, useEffect } from "react";
import styles from "./ProjectForm.module.css";
import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";


function ProjectForm({ btnText }) {
  const [categories, setCategories] = useState([]);

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
  },[]);

  return (
    <form className={styles.form}>
      {/* <div>
        <input type="text" placeholder="insira o nome do projeto" />
      </div> */}
      <Input
        type="text"
        text="nome do projeto"
        name="name"
        placeholder="nome Do projeto"
      />

      <Input
        type="number"
        text="Orçamento do Projeto"
        name="budget"
        placeholder="insira o orçameno total"
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
      />
      {/* <div>
          <input type="submit" value="Criar Projeto"/>
      </div> */}
      <SubmitButton text={btnText} />
    </form>
  );
}
export default ProjectForm;
