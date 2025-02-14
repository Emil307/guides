import React, { useState } from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import sidebarState from "widgets/Sidebar/store/sidebarState";
import { ToggleTheme } from "widgets/ToggleTheme";
import { ChangeLanguage } from "widgets/ChangeLanguage";
import { observer } from "mobx-react-lite";

interface SidebarProps {
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = observer(({ className }) => {
  const { t } = useTranslation("translation");

  return (
    <div
      onClick={() => sidebarState.setIsCollapsed(true)}
      className={clsx(styles.sidebar, className, {
        [styles["collapsed"]]: sidebarState.isCollapsed,
      })}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={clsx(styles.content, {
          [styles["content-collapsed"]]: sidebarState.isCollapsed,
        })}
      >
        <ToggleTheme />
        <ChangeLanguage />
      </div>
    </div>
  );
});
