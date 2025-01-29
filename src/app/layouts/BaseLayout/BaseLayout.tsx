import React from "react";
import styles from "./styles.module.scss";
import { Outlet } from "react-router-dom";
import { NavigationMenu } from "widgets/NavigationMenu";

interface BaseLayoutProps {}

export const BaseLayout: React.FC<BaseLayoutProps> = ({}) => {
  return (
    <div className={styles.baseLayout}>
      <Outlet />
      <NavigationMenu />
    </div>
  );
};
