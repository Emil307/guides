import React from "react";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";

export const EditProfileForm: React.FC = () => {
  const { t } = useTranslation("editProfile");

  return <div className={styles.container}>form</div>;
};
