import React from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { EditProfileForm } from "features/profile";

export const EditProfile: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h2 className={styles.title}>Редактировать профиль</h2>
        <Link to="/me" className={styles.cancel}>
          Отмена
        </Link>
      </div>
      <EditProfileForm />
    </div>
  );
};
