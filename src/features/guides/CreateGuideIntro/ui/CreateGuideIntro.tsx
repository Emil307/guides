import React from "react";
import styles from "./styles.module.scss";
import book from "shared/assets/images/book.png";
import { Button } from "@mantine/core";
import CreateWhiteIcon from "shared/assets/icons/create-white.svg";
import { useTranslation } from "react-i18next";

export const CreateGuideIntro: React.FC = () => {
  const { t } = useTranslation("createGuide");

  return (
    <div className={styles.intro}>
      <div className={styles.introWrapper}>
        <img className={styles.book} src={book} alt="book" />
        <div className={styles.introContent}>
          <h2 className={styles.introTitle}>{t("Create your own guide")}</h2>
          <ul className={styles.introUl}>
            <li className={styles.introLi}>{t("Free to get started")}</li>
            <li className={styles.introLi}>{t("Earn 95% from every sale")}</li>
            <li className={styles.introLi}>
              {t("Referral bonus: Earn 5% for every buyer who uses your link")}
            </li>
            <li className={styles.introLi}>
              {t("Complete the form, add content, and start selling!")}
            </li>
          </ul>
        </div>
        <Button leftIcon={<CreateWhiteIcon />} classNames={styles}>
          {t("Create guide")}
        </Button>
      </div>
    </div>
  );
};
