import { useState } from "react";
import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Navbar from "./Navabar/navbar";
import ProductList from "./HomePage/page";
import Login from "./Login/Login";
import NotFound from "./Notfound";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const router = createBrowserRouter([
    {
      path: "/",
      element: isLoggedIn ? (
        <>
          <Navbar />
          <ProductList />
        </>
      ) : (
        <Login onSuccess={() => setIsLoggedIn(true)} />
      ),
      errorElement: <NotFound />
    },
    {
      path: "/login",
      element: <Login onSuccess={() => setIsLoggedIn(true)} />
    }
  ]);

  return (
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}

export default App;
