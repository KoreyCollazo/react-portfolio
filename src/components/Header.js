import React, { useState, useEffect } from "react";
import NavTabs from "./NavTabs";
import NavTabsMobile from "./NavTabsMobile"

export default function Header({ currentPage, handlePageChange }) {

  function debounce(fn, ms) {
    let timer
    return _ => {
      clearTimeout(timer)
      timer = setTimeout(_ => {
        timer = null
        fn.apply(this, arguments)
      }, ms)
  }};

  const [dimension, setDimension] = useState({
    width: window.innerWidth,
  });

  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimension({
        width: window.innerWidth,
      });
    }, 1000);

    window.addEventListener("resize", debouncedHandleResize);

    return (_) => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });

  const renderNav = () => {
    if (dimension.width > 771 ){
      return  <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />;
    }
    return <NavTabsMobile currentPage={currentPage} handlePageChange={handlePageChange} />;
  }

  return (
    <header>
      <img className="kc-logo" src="%PUBLIC_URL%/assets/images/icon.png" alt="KC logo"></img>
      {renderNav()}
    </header>
  );
}
