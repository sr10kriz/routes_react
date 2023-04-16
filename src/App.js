import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./components/Root";
import Home from "./components/Home";
import Products from "./components/Products";
import Error from "./components/Error";
import ProductCategories from "./components/ProductCategories";
import ProductDetails from "./components/ProductDetails";
import ProductCategoriesDetails from "./components/ProductCategoriesDetails";

const routeDefinitions = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        // path: "",
        index: true,
        element: <Home />,
      },
      // if you want a default route behaviour for some pages i.e after the root layout loaded then you need to load a default home route using {path:"",element:<Jsx />} or {path:"/",element:<Jsx />},alternatively react router dom provides another prop called "index" if we set index to true then it will route your home after once the root route get activated not for other routes i.e {path:"products",element:<Jsx />} or {path:"/products",element:<Jsx />}
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:productId",
        element: <ProductDetails />,
      },
      {
        path: "product-categories",
        element: <ProductCategories />,
      },
      {
        path: "product-categories/:productCatId",
        element: <ProductCategoriesDetails />,
      },
      // path starts with / i.e "/products" which its a absolute path
      // pathe starts with "products" which means its a relative path
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={routeDefinitions} />
    </>
  );
}

export default App;
