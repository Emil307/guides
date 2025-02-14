import React from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";
import StarIcon from "shared/assets/icons/star.svg";
import SettingsWhiteIcon from "shared/assets/icons/settings-white.svg";
import SettingsBlackIcon from "shared/assets/icons/settings-black.svg";
import { useTheme } from "shared/config";
import sidebarState from "widgets/Sidebar/store/sidebarState";

interface BalanceProps {
  className?: string;
}

export const Balance: React.FC<BalanceProps> = ({ className }) => {
  const { theme } = useTheme();
  return (
    <div className={clsx(styles.balance, className)}>
      <div className={styles.top}>
        <div className={styles.balanceContainer}>
          <h2 className={styles.balanceTitle}>Баланс</h2>
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
      <div className={styles.bottom}></div>
    </div>
  );
};
