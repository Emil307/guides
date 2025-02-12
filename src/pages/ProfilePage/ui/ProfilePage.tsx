import React from "react";
import { useTranslation } from "react-i18next";
import { ChangeLanguage } from "widgets/ChangeLanguage";
import { ToggleTheme } from "widgets/ToggleTheme";

const ProfilePage: React.FC = () => {
  const { t } = useTranslation("profile");

  return (
    <div>
      <ToggleTheme />
      <ChangeLanguage />
      {t("Profile page")}
    </div>
  );
};

export default ProfilePage;
