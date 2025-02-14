import React from "react";
import { ProfileInfo } from "widgets/ProfileInfo";
import styles from "./styles.module.scss";
import { BackButton } from "shared/ui";
import { PublicProfileGuides } from "widgets/PublicProfileGuides";

const ProfilePagePublic: React.FC = () => {
  return (
    <div>
      <div className={styles.top}>
        <BackButton />
        <h2 className={styles.title}>Профиль</h2>
      </div>
      <ProfileInfo />
      <PublicProfileGuides />
    </div>
  );
};

export default ProfilePagePublic;
