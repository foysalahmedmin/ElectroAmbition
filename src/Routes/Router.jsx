import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";
import Shop from "../Pages/Shop/Shop/Shop";
import Contact from "../Pages/Contact/Contact/Contact";
import Cart from "../Pages/Cart/Cart/Cart";
import Product from "../Pages/Product/Product/Product";
import CategorizeShop from "../Pages/Shop/CategorizeShop/CategorizeShop";
import ShopAll from "../Pages/Shop/CategorizeShop/ShopAll";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/shop",
        element: <Shop />,
        children: [
          {
            path: "/shop",
            element: <ShopAll />,
            loader: async () => fetch(`http://localhost:5000/totalProducts/all`)
          },
          {
            path: ":category",
            element: <CategorizeShop />,
            loader: async ({ params }) => fetch(`http://localhost:5000/totalProducts/${params.category}`)
          }
        ]
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "product/:id",
        element: <Product />,
        loader: async ({ params }) => fetch(`http://localhost:5000/product/${params.id}`)
      }
    ]
  },
]);

export default router;