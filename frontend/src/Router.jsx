import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetil from "./pages/productDetil/ProductDetil"; // እዚህ ጋር የፋይሉን ስም እርግጠኛ ሁን
import Cart from "./pages/cart/Cart";
import Payment from "./pages/payment/Payment";
import Order from "./pages/orderspage/Order";
import Result from "./pages/result/Result";
import Landing from "./pages/landing/landing";
function Routering() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/product/:id" element={<ProductDetil />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/search/:query" element={<Result />} />
        <Route path="/category/:id" element={<Result />} />
      </Routes>
    </Router>
  );
}

export default Routering;
