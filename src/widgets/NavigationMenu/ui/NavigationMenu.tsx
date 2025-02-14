import React from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";
import { Link } from "react-router-dom";
import HomeWhiteIcon from "shared/assets/icons/home-white.svg";
import HomeBlackIcon from "shared/assets/icons/home-black.svg";
import CreateWhiteIcon from "shared/assets/icons/create-white.svg";
import CreateBlackIcon from "shared/assets/icons/create-black.svg";
import ProfileWhiteIcon from "shared/assets/icons/profile-white.svg";
import ProfileBlackIcon from "shared/assets/icons/profile-black.svg";
import { useTheme } from "shared/config";
import { useTranslation } from "react-i18next";

interface NavigationMenuProps {
  className?: string;
}

export const NavigationMenu: React.FC<NavigationMenuProps> = ({
  className,
}) => {
  const { theme } = useTheme();
  const { t } = useTranslation("navbar");

  return (
    <div className={clsx(styles.navigationMenu, className)}>
      <Link to="/" className={styles.link}>
        {theme === "light" && <HomeBlackIcon height={24} />}
        {theme === "dark" && <HomeWhiteIcon height={24} />}
        {t("Home")}
      </Link>
      <Link to="/create" className={styles.link}>
        {theme === "light" && <CreateBlackIcon height={24} />}
        {theme === "dark" && <CreateWhiteIcon height={24} />}
        {t("Create")}
      </Link>
      <Link to="/profile/me" className={styles.link}>
        {theme === "light" && <ProfileBlackIcon height={24} />}
        {theme === "dark" && <ProfileWhiteIcon height={24} />}
        {t("Profile")}
      </Link>
    </div>
  );
};
