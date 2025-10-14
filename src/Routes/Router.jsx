import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../page/Home";
import Login from "../page/Login";
import Register from "../page/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path : '/login',
        Component : Login,
      },
      {
        path : '/register',
        Component : Register,
      },
      {
        path : '/find-tutors',
        Component : Login,
      },
      {
        path : '/add-tutorials',
        Component : Login,
      },
      {
        path : '/my-tutorials',
        Component : Login,
      },
      {
        path : '/booked-tutors',
        Component : Login,
      },
    ],
  },
]);
