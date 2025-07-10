import { Home } from "./Home/index";
import { Cart } from "./Cart/index";
import { About } from "./About/index";
import { Login } from "./login/Login";
import { Navbar } from "../components/React-router/Navbar";
import { PrivateRoute } from "../components/React-router/PrivateRoute/PrivateRoute";
import { Items } from "../components/React-router/Items";
import { Payement } from "../components/React-router/Payement";
import "./pages.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NotFound } from "../components/React-router/NotFound";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Home />
      </div>
    ),
  },
  {
    path: "/cart",
    element: (
      <div>
        <Navbar />
        <PrivateRoute>
          <Cart />
        </PrivateRoute>
        ,
      </div>
    ),
    children: [
      {
        path: "payment",
        element: <Payement />,
      },
      {
        path: "items",
        element: <Items />,
      },
    ],
  },
  {
    path: "/about",
    element: (
      <div>
        <Navbar />
        <About />
      </div>
    ),
    children: [
      {
        path: "payment",
        element: <Payement />,
      },
      {
        path: "items",
        element: <Items />,
      },
    ],
  },
  {
    path: "/login",
    element: (
      <div>
        <Navbar />
        <Login />
      </div>
    ),
  },
  {
    path: "*",
    element: (
      <div>
        <NotFound />
      </div>
    ),
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
