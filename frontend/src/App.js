import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ProductList from "./Pages/ProductList";
import AddProduct from "./Pages/AddProduct";
import "./App.css";
import ReviewPage from "./Pages/ReviewPage";
import ProductCard from "./components/ProductCard";
import ProductPage from "./Pages/ProductPage";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="outer-cont">
       <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/products/:productId" element={<ProductPage />} />
        <Route path="/products/:productId/review" element={<ReviewPage />} />
        <Route path="/products/:productId" element={<ProductPage />} />
      </Routes>
    </div>
  );
};

export default App;
