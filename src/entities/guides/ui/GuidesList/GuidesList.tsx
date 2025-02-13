import React from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";
import { GuideCard, IGuide } from "entities/guides";

interface GuidesListProps {
  guides: IGuide[];
}

export const GuidesList: React.FC<GuidesListProps> = ({ guides }) => {
  return (
    <div className={styles.container}>
      {guides.map((guide) => (
        <GuideCard guide={guide} />
      ))}
    </div>
  );
};
