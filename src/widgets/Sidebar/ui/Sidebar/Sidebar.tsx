import React, { useState } from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import sidebarState from "widgets/Sidebar/store/sidebarState";
import { ToggleTheme } from "widgets/ToggleTheme";
import { ChangeLanguage } from "widgets/ChangeLanguage";
import { observer } from "mobx-react-lite";
import CloseIcon from "shared/assets/icons/close.svg";
import LanguageIcon from "shared/assets/icons/lang.svg";
import { useTheme } from "shared/config";

interface SidebarProps {
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = observer(({ className }) => {
  const { t } = useTranslation("profile");
  const { theme } = useTheme();

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
        <div className={styles.top}>
          <h2 className={styles.title}>{t("Settings")}</h2>
          <button onClick={() => sidebarState.setIsCollapsed(true)}>
            <CloseIcon />
          </button>
        </div>
        <div className={styles.settings}>
          <div className={styles.langWrapper}>
            <span className={styles.lang}>
              <LanguageIcon />
              {t("Language")}
            </span>
            <ChangeLanguage />
          </div>
          <div className={styles.themeWrapper}>
            <span className={styles.theme}>
              {theme === "dark" && <>{t("Dark theme")}</>}
              {theme === "light" && <>{t("Light theme")}</>}
            </span>
            <ToggleTheme />
          </div>
        </div>
        <div className={styles.credits}>
          <p>{t("Privacy Policy")}</p>
          <p>{t("All rights reserved")}</p>
        </div>
      </div>
    </div>
  );
});
