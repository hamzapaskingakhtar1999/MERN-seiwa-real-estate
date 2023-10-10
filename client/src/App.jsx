import React from "react";

/* React Router DOM */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* Pages */
import Home from "./pages/home/Home";
import Signin from "./pages/signin/Signin";
import Signout from "./pages/signout/Signout";
import About from "./pages/about/About";
import Profile from "./pages/profile/Profile";
import Header from "./components/header/Header";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/sign-up" element={<Signout />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
