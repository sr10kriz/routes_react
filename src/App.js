import './App.css';
import { createBrowserRouter,RouterProvider } from "react-router-dom";

import Root from './components/Root';
import Home from './components/Home';
import Products from './components/Products';
import Error from "./components/Error";
import ProductCategories from './components/ProductCategories';

const routeDefinitions = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      errorElement: <Error />,
      children: 
      [
        {
          path: "/", 
          element: <Home />
        },
        {
          path: "/products", 
          element: <Products />
        },
        {
          path: "/product-categories",
          element: <ProductCategories />
        }
      ]
    },
  ]
)

function App() {
  return (
    <>
      <RouterProvider router={routeDefinitions} />
    </>
  );
}

export default App;
