import styles from './NewProjects.module.css'
import ProjectForm from '../projects/ProjectForm'

function NewProject() {
    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie projeto para deposi adicio0nar serviçoes</p>
          <ProjectForm/>
        </div>
    )
}
export default NewProject