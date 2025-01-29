import React from "react";
import { useTranslation } from "react-i18next";
import { Theme, useTheme } from "shared/config";
import { Button, ThemeButton } from "shared/ui";

interface ToggleThemeProps {
  className?: string;
}

export const ToggleTheme: React.FC<ToggleThemeProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation("translation");

  return (
    <Button onClick={toggleTheme} theme={ThemeButton.CLEAR}>
      {theme === Theme.LIGHT && <p>{t("Light")}</p>}
      {theme === Theme.DARK && <p>{t("Dark")}</p>}
    </Button>
  );
};
