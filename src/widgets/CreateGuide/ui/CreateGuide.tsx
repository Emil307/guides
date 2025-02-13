import React from "react";
import styles from "./styles.module.scss";
import { CreateGuideIntro } from "features/guides";

export const CreateGuide: React.FC = () => {
  return (
    <div className={styles.createGuide}>
      <CreateGuideIntro />
    </div>
  );
};
