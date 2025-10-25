import { createBrowserRouter } from "react-router";
import Error from "../Components/Error";
import Loading from "../Components/Loading";
import MainLayout from "../Layout/MainLayout";
import AddTutorials from "../page/AddTutorials";
import BookedTutorials from "../page/BookedTutorials";
import FindTutorials from "../page/FindTutorials";
import Home from "../page/Home";
import Login from "../page/Login";
import MyTutorialsPage from "../page/MyTutorialsPage";
import Register from "../page/Register";
import TutorDetails from "../page/TutorDetails";
import UpdateTutors from "../page/UpdateTutors";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <Error></Error>,
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
        loader: () =>
          fetch("https://b11-a11-server-black.vercel.app/addtutors"),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/tutorDetails/:id",
        element: (
          <PrivateRoutes>
            <TutorDetails></TutorDetails>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://b11-a11-server-black.vercel.app/tutorDetails/${params.id}`
          ),
        hydrateFallbackElement: <Loading></Loading>,
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
        path: "/update-tutors/:id",
        element: (
          <PrivateRoutes>
            <UpdateTutors></UpdateTutors>
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
        ),
      },
    ],
  },
]);
