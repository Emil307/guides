import React from "react";
import styles from "./styles.module.scss";
import EditIcon from "shared/assets/icons/edit.svg";
import { Link } from "react-router-dom";

export const ProfileInfo: React.FC = () => {
  return (
    <div className={styles.container}>
      <div
        className={styles.avatar}
        style={{
          backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Felis_silvestris_silvestris.jpg/550px-Felis_silvestris_silvestris.jpg)`,
        }}
      />
      <div className={styles.right}>
        <div className={styles.top}>
          <h2 className={styles.name}>Ксения Гладкова</h2>
          <Link to="/edit-profile">
            <EditIcon />
          </Link>
        </div>
        <p className={styles.desc}>
          Преподаю химию и биологию, сюда пишу свои короткие статьи и гайды
        </p>
        <span className={styles.link}>https//t.me/ksustudy.com</span>
      </div>
    </div>
  );
};
