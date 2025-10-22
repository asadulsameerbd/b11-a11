import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import AddTutorials from "../page/AddTutorials";
import BookedTutorials from "../page/BookedTutorials";
import FindTutorials from "../page/FindTutorials";
import Home from "../page/Home";
import Login from "../page/Login";
import MyTutorialsPage from "../page/MyTutorialsPage";
import Register from "../page/Register";
import TutorDetails from "../page/TutorDetails";
import PrivateRoutes from "./PrivateRoutes";

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
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/find-tutors",
        Component: FindTutorials,
        loader: () => fetch("http://localhost:3000/addtutors"),
      },
      {
        path: "/tutorDetails/:id",
        element: (
          <PrivateRoutes>
            <TutorDetails></TutorDetails>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/tutorDetails/${params.id}`),
      },
      {
        path: "/add-tutorials",
        element: (
          <PrivateRoutes>
            <AddTutorials></AddTutorials>
          </PrivateRoutes>
        ),
      },
      {
        path: "/my-tutorials",
        element: (
          <PrivateRoutes>
            <MyTutorialsPage></MyTutorialsPage>
          </PrivateRoutes>
        ),
      },
      {
        path: "/booked-tutors",
        element: (
          <PrivateRoutes>
            <BookedTutorials></BookedTutorials>
          </PrivateRoutes>
        )
      },
    ],
  },
]);
