import React from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { EditProfileForm } from "features/profile";
import { useTranslation } from "react-i18next";

export const EditProfile: React.FC = () => {
  const { t } = useTranslation("editProfile");

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h2 className={styles.title}>{t("Edit profile")}</h2>
        <Link to="/me" className={styles.cancel}>
          {t("Cancel")}
        </Link>
      </div>
      <EditProfileForm />
    </div>
  );
};
