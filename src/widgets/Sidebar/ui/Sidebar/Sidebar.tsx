import React, { useState } from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";
import { ToggleTheme } from "widgets/ToggleTheme";
import { Button, ThemeButton } from "shared/ui";
import { ChangeLanguage } from "widgets/ChangeLanguage";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export type TLink = {
  id: number;
  title: string;
  to: string;
};

export type TCategories = {
  id: number;
  title: string;
  links: TLink[];
};

interface SidebarProps {
  className?: string;
  categories: TCategories[];
}

export const Sidebar: React.FC<SidebarProps> = ({ className, categories }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { t } = useTranslation("translation");

  return (
    <div
      className={clsx(styles.sidebar, className, {
        [styles["collapsed"]]: isCollapsed,
      })}
    >
      sidebar
    </div>
  );
};
