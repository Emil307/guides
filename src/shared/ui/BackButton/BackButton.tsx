import React from "react";
import styles from "./styles.module.scss";
import ArrowWhiteIcon from "shared/assets/icons/arrow-white.svg";
import ArrowBlackIcon from "shared/assets/icons/arrow-black.svg";
import { useTheme } from "shared/config";
import { useNavigate } from "react-router-dom";

export const BackButton: React.FC = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();

  return (
    <button className={styles.backButton} onClick={() => navigate(-1)}>
      {theme === "dark" && <ArrowWhiteIcon />}
      {theme === "light" && <ArrowBlackIcon />}
    </button>
  );
};
