import React from "react";
import { ProfileInfo } from "widgets/ProfileInfo";
import { Sidebar } from "widgets/Sidebar";
import styles from "./styles.module.scss";
import { BackButton } from "shared/ui";

const ProfilePagePublic: React.FC = () => {
  return (
    <div>
      <div className={styles.top}>
        <BackButton />
        <h2 className={styles.title}>Профиль</h2>
      </div>
      <ProfileInfo />
      <Sidebar />
    </div>
  );
};

export default ProfilePagePublic;
