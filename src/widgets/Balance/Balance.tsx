import React from "react";
import styles from "./styles.module.scss";
import StarIcon from "shared/assets/icons/star.svg";
import SettingsWhiteIcon from "shared/assets/icons/settings-white.svg";
import SettingsBlackIcon from "shared/assets/icons/settings-black.svg";
import { useTheme } from "shared/config";
import sidebarState from "widgets/Sidebar/store/sidebarState";
import { Button } from "@mantine/core";
import { useTranslation } from "react-i18next";

export const Balance: React.FC = () => {
  const { theme } = useTheme();
  const { t } = useTranslation("profile");

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.balanceContainer}>
          <h2 className={styles.balanceTitle}>{t("Balance")}</h2>
          <div className={styles.balanceWrapper}>
            <StarIcon />
            <p className={styles.balance}>1500</p>
          </div>
        </div>
        <button onClick={() => sidebarState.setIsCollapsed(false)}>
          {theme === "dark" && <SettingsWhiteIcon />}
          {theme === "light" && <SettingsBlackIcon />}
        </button>
      </div>
      <div className={styles.bottom}>
        <Button>{t("Connect wallet")}</Button>
        <Button
          styles={() => ({
            root: {
              backgroundColor: theme === "dark" ? "#fff" : "#000",
              color: theme === "dark" ? "#000" : "#fff",
            },
          })}
        >
          {t("Withdraw funds")}
        </Button>
      </div>
    </div>
  );
};
