import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import AddTutorials from "../page/AddTutorials";
import BookedTutorials from "../page/BookedTutorials";
import FindTutorials from "../page/FindTutorials";
import Home from "../page/Home";
import Login from "../page/Login";
import MyTutorialsPage from "../page/MyTutorialsPage";
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
        Component : FindTutorials,
        loader : ()=> fetch("http://localhost:3000/addtutors")
      },
      {
        path : '/add-tutorials',
        Component : AddTutorials,
      },
      {
        path : '/my-tutorials',
        Component : MyTutorialsPage,
      },
      {
        path : '/booked-tutors',
        Component : BookedTutorials,
      },
    ],
  },
]);
