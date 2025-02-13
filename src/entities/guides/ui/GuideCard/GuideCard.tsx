import React from "react";
import styles from "./styles.module.scss";
import { IGuide } from "entities/guides";
import DotsIcon from "shared/assets/icons/dots.svg";
import StarIcon from "shared/assets/icons/star.svg";
import { t } from "i18next";

interface GuideCardProps {
  guide: IGuide;
}

export const GuideCard: React.FC<GuideCardProps> = ({ guide }) => {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={guide.intro_image} alt={guide.title} />
      <div className={styles.content}>
        <div className={styles.top}>
          <h3 className={styles.title}>{guide.title}</h3>
          <DotsIcon />
        </div>
        <span className={styles.author}>{guide.author}</span>
        <div className={styles.bottom}>
          <p className={styles.time}>{guide.created_at}</p>
          <div className={styles.priceWrapper}>
            <StarIcon />
            <p className={styles.price}>{guide.cost}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
