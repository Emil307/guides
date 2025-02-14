import React from "react";
import { ProfileInfo } from "widgets/ProfileInfo";
import styles from "./styles.module.scss";
import { BackButton } from "shared/ui";
import { PublicProfileGuides } from "widgets/PublicProfileGuides";
import { useTranslation } from "react-i18next";

const ProfilePagePublic: React.FC = () => {
  const { t } = useTranslation("profile");

  return (
    <div>
      <div className={styles.top}>
        <BackButton />
        <h2 className={styles.title}>{t("Profile")}</h2>
      </div>
      <ProfileInfo />
      <PublicProfileGuides />
    </div>
  );
};

export default ProfilePagePublic;
