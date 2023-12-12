import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Layout/HomePage";
import Room from "../Page/Room/Room";
import GoogleLogin from "../Page/Login and Register/Social Login/GoogleLogin";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/room/:roomID",
      element: <Room />,
    },
    {
      path: "/login",
      element: <GoogleLogin />,
    },
  ]);