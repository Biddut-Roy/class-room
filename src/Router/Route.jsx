import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Layout/HomePage";
import Room from "../Page/Room/Room";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/room/:roomID",
      element: <Room />,
    },
  ]);