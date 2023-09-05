import Header from "../layout/Header/Header";
import CreateButton from "../layout/CreateButton";
import addClass from "../layout/imagesCreateButton/addClass.svg";
import SearchInput from '../layout/ClassComponents/SearchInput'
import CustomSelect from '../layout/ClassComponents/CustomSelect'
import ContainerInfoDeleteContainer from '../layout/ClassComponents/ContainerInfoDeleteContainer'
function Turmas() {
  return (

      <div style={{
          display:'flex',
          flexDirection:'column',
          width:'100%',
          height:'100%',
      }}>

<Header title="Turmas" />
<SearchInput text="Buscar turma"/>

<CustomSelect/>
<ContainerInfoDeleteContainer/>
<CreateButton image={addClass} />

      </div>
    
  
  );
}

export default Turmas;
