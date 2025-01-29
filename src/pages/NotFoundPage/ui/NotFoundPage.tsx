import React from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ className }) => {
  const { t } = useTranslation("translation");
  return (
    <div className={clsx(styles.notFoundPage, className)}>
      {t("Page not found")}
    </div>
  );
};
