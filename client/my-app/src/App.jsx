import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Post from "./pages/PostDetails";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Categories from "./pages/Categories";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/posts/:slug" element={<Post />} />
            <Route path="/categories" element={<Categories />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
