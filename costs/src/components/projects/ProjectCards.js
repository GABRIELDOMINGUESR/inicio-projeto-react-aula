import styles from "./ProjectCards.module.css";
import { BsPencil, BsFillTrashFill } from "react-icons/bs"; // Correção do import

function ProjectCards({ id, name, budget, category, handleRemove }) {
  return (
    <div className={styles.project_card}>
      <h4>{name}</h4>
      <p>
        <span>Orçamento:</span>R${budget}
      </p>
      <p className={styles.category_text}>
        <span  className={`${styles[category.toLowerCase()]}`}></span> {category}
      </p>

      <div>
        <p>Editar</p>
        <p>remover</p>
      </div>

      
    </div>
  );
}
export default ProjectCards;
