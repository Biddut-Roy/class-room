import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Layout/HomePage";
import Room from "../Page/Room/Room";
import GoogleLogin from "../Page/Login and Register/Social Login/GoogleLogin";
import Authprovider from "../Authprovider/Authprovider";
import PrivateRoute from "./PrivateRoute";


export const router = createBrowserRouter([
    {
      path: "/",
      element:<PrivateRoute><HomePage /></PrivateRoute> ,
    },
    {
      path: "/room/:roomID",
      element:<PrivateRoute><Room /></PrivateRoute>,
    },
    {
      path: "/login",
      element: <GoogleLogin />,
    },
  ]);