import { useEffect, useState } from "react";
import "./App.css";
import { addProduct } from "./features/productsSlice";
import { useDispatch } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import Cart from "./components/cart/Cart.jsx";
import { CartProvider } from "./Context/cartContext.js";
import Checkout from "./components/Checkout/Checkout.jsx";

function App() {
  const [bill, setBill] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://fakestoreapi.com/products");
      const dataRes = await res.json();

      dispatch(addProduct(dataRes));
    }
    fetchData();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />,
          index: true,
        },
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "bill",
          element: <Checkout />,
        },
      ],
    },
  ]);

  return (
    <CartProvider value={{ bill, setBill }}>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
