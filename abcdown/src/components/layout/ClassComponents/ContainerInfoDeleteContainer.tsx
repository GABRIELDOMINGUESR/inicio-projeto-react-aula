import React from "react";
import styles from './ContainerInfoDeleteContainer.module.css'

function ContainerInfoDeleteContainer() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <button className={styles.info}>Infos</button>
      <button className={styles.delete}></button>
    </div>
  );
}

export default ContainerInfoDeleteContainer;
