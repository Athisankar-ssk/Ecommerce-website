import { useState } from "react";
import "./App.css";
import ProductList from "./HomePage/page";
import Navbar from "./Navabar/navbar";
import Login from "./Login/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {isLoggedIn ? (
        <>
          <Navbar />
          <ProductList />
        </>
      ) : (
        <Login onSuccess={() => setIsLoggedIn(true)} />
      )}
    </>
  );
}

export default App;
