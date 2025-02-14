import React from "react";
import styles from "./styles.module.scss";
import { GuidesList } from "entities/guides";

const guides = [
  {
    id: 1,
    title: "Как заработать миллион в онлайн",
    description:
      "Купив этот гайд, вы сможете создавать тг ботов для ваших целей, задач и бизнеса, а так же итд.",
    intro_image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Felis_silvestris_silvestris.jpg/550px-Felis_silvestris_silvestris.jpg",
    cost: 150,
    category: 1,
    author: "Андрей Тейт",
    created_at: "2 года назад",
    language: "ru",
    link: "",
  },
  {
    id: 2,
    title: "Как заработать 2 миллиона в онлайн",
    description:
      "Купив этот гайд, вы сможете создавать тг ботов для ваших целей, задач и бизнеса, а так же итд.",
    intro_image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Felis_silvestris_silvestris.jpg/550px-Felis_silvestris_silvestris.jpg",
    cost: 150,
    category: 1,
    author: "Андрей Тейт",
    created_at: "2 года назад",
    language: "ru",
    link: "",
  },
];

export const MyGuides: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Мои гайды</h2>
      <GuidesList guides={guides} />
    </div>
  );
};
