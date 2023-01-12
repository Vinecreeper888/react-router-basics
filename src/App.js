import { Route, Routes, Navigate } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import React from "react";
import MainHeader from "./components/MainHeader";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to='/welcome'/>}/>
          <Route path="/welcome/*" element={<Welcome />}/>
          <Route path="/products" element={<Products />} exact/>
          <Route path="/products/:productId" element={<ProductDetails />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
