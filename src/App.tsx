import { useState } from "react";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { Home } from "./pages/Home";
import { Categories } from "./pages/Categories";
import { CategoryItems } from "./pages/CategoryItems";
import { Basket } from "./pages/Basket";
import { PageNotFound } from "./pages/PageNotFound";
import { ProductDetalis } from "./pages/ProductDetails";
function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route index element={<Navigate to="/products" />} />
          <Route path="/products" element={<Home />} />
          <Route path="/products/:id" element={<ProductDetalis />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:id" element={<CategoryItems />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
