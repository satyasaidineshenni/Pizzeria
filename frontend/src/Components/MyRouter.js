import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "./Home";
import OrderPizza from "./OrderPizza";
import BuildYourPizza from "./BuildYourPizza";
import Cart from "./Cart";
import Errorelement from "./Errorelement";
import Checkout from "./Checkout";

const MyRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/orderPizza",
        element: <OrderPizza />,
      },
      {
        path: "/buildYourPizza",
        element: <BuildYourPizza />,
      },
      { path: "/checkout", element: <Checkout /> },
    ],
    errorElement: <Errorelement />,
  },
  {
    path: "/Cart",
    element: <Cart />,
  },
]);
export default MyRouter;
