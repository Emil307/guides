import { MainPage } from "pages/MainPage";
import { CreateGuidePage } from "pages/CreateGuidePage";
import { ProfilePage } from "pages/ProfilePage";
import { NotFoundPage } from "pages/NotFoundPage";
import { RouteProps } from "react-router-dom";
import { ProfilePagePublic } from "pages/ProfilePagePublic";
import { EditProfilePage } from "pages/EditProfilePage";

export enum AppRoutes {
  MAIN = "main",
  CREATE = "create",
  PROFILE_ME = "profile-me",
  PROFILE = "profile",
  EDIT_PROFILE = "edit-profile",
  NOT_FOUND = "not_found",
}

const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.CREATE]: "/create",
  [AppRoutes.PROFILE_ME]: "/me",
  [AppRoutes.PROFILE]: "/profile",
  [AppRoutes.EDIT_PROFILE]: "/edit-profile",
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
  [AppRoutes.EDIT_PROFILE]: {
    path: RoutePath["edit-profile"],
    element: <EditProfilePage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
