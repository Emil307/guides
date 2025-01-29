import React from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "shared/ui";

interface ChangeLanguageProps {
  className?: string;
}

export const ChangeLanguage: React.FC<ChangeLanguageProps> = ({
  className,
}) => {
  const { t, i18n } = useTranslation();

  function changeLanguage() {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  }

  return (
    <Button
      theme={ThemeButton.CLEAR}
      onClick={changeLanguage}
      className={clsx(styles.changeLanguage, className)}
    >
      {t("Translate")}
    </Button>
  );
};
