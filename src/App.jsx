import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//context
import { AuthProvider } from "./context/AuthContext";

// components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <AuthProvider>
      <BrowserRouter>
      <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
