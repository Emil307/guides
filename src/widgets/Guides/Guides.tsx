import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import { GuidesList } from "entities/guides";
import { useTranslation } from "react-i18next";
import guidesState from "entities/guides/store/guidesState";
import { observer } from "mobx-react-lite";

export const Guides: React.FC = observer(() => {
  const { t } = useTranslation("main");

  useEffect(() => {
    guidesState.handleGetAllGuides();
    guidesState.handleGetMyGuides();
    guidesState.handleGetEngGuides();
    guidesState.handleGetRuGuides();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.guides}>
        <h2 className={styles.guidesTitle}>{t("All Guides")}</h2>
        <GuidesList guides={guidesState.allGuides} />
      </div>
      <div className={styles.guides}>
        <h2 className={styles.guidesTitle}>{t("My Guides")}</h2>
        <GuidesList guides={guidesState.myGuides} />
      </div>
      <div className={styles.guides}>
        <h2 className={styles.guidesTitle}>{t("English")}</h2>
        <GuidesList guides={guidesState.engGuides} />
      </div>
      <div className={styles.guides}>
        <h2 className={styles.guidesTitle}>{t("Russian")}</h2>
        <GuidesList guides={guidesState.ruGuides} />
      </div>
    </div>
  );
});
