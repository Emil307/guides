import React, { Suspense } from "react";
import "./styles/index.scss";
import { useTheme } from "shared/config";
import { AppRouter } from "./providers/RouterProvider";

export const App: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Suspense fallback="">
        <AppRouter />
      </Suspense>
    </div>
  );
};
