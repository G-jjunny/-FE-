import React from "react";
import { SyncLoader } from "react-spinners";
import styles from "../styles/components/Loading.module.scss";

const Loading = () => {
  return (
    <div className={styles.container}>
      <div className={styles.layer}></div>
      <SyncLoader />
    </div>
  );
};

export default Loading;
