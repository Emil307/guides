import React from "react";
import { useTranslation } from "react-i18next";
import { Tabs, TTab } from "shared/ui";
import { Guides } from "widgets/Guides";

const MainPage: React.FC = () => {
  const { t } = useTranslation("main");

  const tabs: TTab[] = [
    {
      value: "all",
      label: "Все гайды",
      onClick: () => {},
    },
    {
      value: "my",
      label: "Мои гайды",
      onClick: () => {},
    },
    {
      value: "eng",
      label: "English",
      onClick: () => {},
    },
    {
      value: "ru",
      label: "Русский",
      onClick: () => {},
    },
  ];

  return (
    <div>
      <Tabs tabs={tabs} />
      <Guides />
    </div>
  );
};

export default MainPage;
