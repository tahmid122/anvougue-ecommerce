import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Features from "./components/Features";
import Shop from "./components/Shop";
import Product from "./components/Product";
import Blog from "./components/Blog";
import Pages from "./components/Pages";
import Error from "./components/Error";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Contact from "./components/Contact";
import Stores from "./components/Stores";
import Faqs from "./components/Faqs";
import Register from "./components/Register";
import Login from "./components/Login";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product" element={<Product />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/pages" element={<About />} />
        <Route path="/pages/about" element={<About />} />
        <Route path="/pages/contact" element={<Contact />} />
        <Route path="/pages/stores" element={<Stores />} />
        <Route path="/pages/faqs" element={<Faqs />} />
        <Route path="*" element={<Error />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
