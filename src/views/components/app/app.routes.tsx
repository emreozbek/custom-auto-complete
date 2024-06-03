import React from "react";
import { useRoutes, RouteObject } from "react-router-dom";
import { PATHS } from "@config/paths.config";
import { MainLayout } from "@layouts/main.layout";
import { MainPage } from "@pages/main.page";

const routes: RouteObject[] = [
  {
    element: <MainLayout />,
    children: [
      {
        path: PATHS.MAIN,
        element: <MainPage />,
      },
    ],
  },
];

type Props = {};
export const AppRoutes: React.FC<Props> = () => useRoutes(routes);
