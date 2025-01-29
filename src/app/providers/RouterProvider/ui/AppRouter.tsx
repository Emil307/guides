import { BaseLayout } from "app/layouts/BaseLayout/BaseLayout";
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config";

export const AppRouter: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          {Object.values(routeConfig).map((route) => (
            <Route path={route.path} element={route.element} key={route.path} />
          ))}
        </Route>
      </Routes>
    </Suspense>
  );
};
