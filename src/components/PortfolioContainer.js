import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import "../../node_modules/animate.css/animate.css";



export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  

  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home handlePageChange={handlePageChange} />;
    }
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = async (page) => {
    const delay = (ms) => new Promise((res) => setTimeout(res, ms));
    const el = document.getElementById("main-container"),
      classList = "classList" in el;
    for (var i = 0; i < el.children.length; i++) {
      var child = el.children[i];
      if (child) {
        if (classList) {
          child.classList.add("animate__animated");
          child.classList.add("animate__fadeOutUp");
        } else {
          child.className += "animate__animated";
          child.className += "animate__fadeOutUp";
        }
      }
    }
    await delay(2400);
    setCurrentPage(page);
  };

  return (
    <div>
      <Header
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      ></Header>
      {renderPage()}
      <Footer></Footer>
    </div>
  );
}
