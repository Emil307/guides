import React from "react";
import { useTranslation } from "react-i18next";

const CreateGuidePage: React.FC = () => {
  const { t } = useTranslation("createGuide");

  return <div>{t("Create guide page")}</div>;
};

export default CreateGuidePage;
