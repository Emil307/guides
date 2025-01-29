import React from "react";
import { useTranslation } from "react-i18next";

const ProfilePage: React.FC = () => {
  const { t } = useTranslation("profile");

  return <div>{t("Profile page")}</div>;
};

export default ProfilePage;
