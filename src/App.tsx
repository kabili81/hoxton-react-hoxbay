import { useState } from "react";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { Home } from "./pages/Home";
import { Categories } from "./pages/Categories";
import { CategoriesItems } from "./pages/CategoriesItems";
function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route index element={<Navigate to="/products" />} />
          <Route path="/products" element={<Home />} />
          <Route path="/categories" element={<CategoriesItems />} />
          <Route path="/categories/:id" element={<CategoriesItems />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
