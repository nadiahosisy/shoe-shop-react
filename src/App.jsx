import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SharedLayout, Shoe } from "./components";
import { NotFound, Home, Catalog, AddProduct, ShoeDetails } from "./pages";

const routes = [
  {
    path: "/",
    element: <SharedLayout />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "/catalog",
        element: <Catalog />,
      },
      {
        path: "/catalog/:shoeId",
        element: <ShoeDetails />,
      },
      {
        path: "/addproduct",
        element: <AddProduct />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];

const App = () => {
  const router = createBrowserRouter(routes);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
export default App;
