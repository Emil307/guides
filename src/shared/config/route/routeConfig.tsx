import { MainPage } from "pages/MainPage";
import { CreateGuidePage } from "pages/CreateGuidePage";
import { ProfilePage } from "pages/ProfilePage";
import { NotFoundPage } from "pages/NotFoundPage";
import { RouteProps } from "react-router-dom";
import { ProfilePagePublic } from "pages/ProfilePagePublic";

export enum AppRoutes {
  MAIN = "main",
  CREATE = "create",
  PROFILE_ME = "profile-me",
  PROFILE = "profile",
  NOT_FOUND = "not_found",
}

const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.CREATE]: "/create",
  [AppRoutes.PROFILE_ME]: "/profile/me",
  [AppRoutes.PROFILE]: "/profile",
  [AppRoutes.NOT_FOUND]: "*",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.CREATE]: {
    path: RoutePath.create,
    element: <CreateGuidePage />,
  },
  [AppRoutes.PROFILE_ME]: {
    path: RoutePath["profile-me"],
    element: <ProfilePage />,
  },
  [AppRoutes.PROFILE]: {
    path: RoutePath.profile,
    element: <ProfilePagePublic />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
