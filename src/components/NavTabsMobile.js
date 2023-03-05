import React from 'react';


function NavTabsMobile({ currentPage, handlePageChange }) {

  function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  };
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  };

  function mobileNav(location) {
    closeNav();
    handlePageChange(location);
  }

  return (
    <div>
      <div className="button-wrapper">
        <button className="menu-button" onClick={()=>openNav()}>&#9776; </button>
      </div>
    <div id="mySidenav" className="sidenav">
      <div className="closebtnWrapper">
        <button className="closebtn" onClick={()=>closeNav()}>&times;</button>
      </div>
      <ul className="nav flex-column">
      <div className=' animate__animated animate__backInDown'>
        <li className="nav-item animate__animated animate__slower animate__fadeIn">
          <a
            href="#home"
            onClick={() => mobileNav('Home')}
            className={currentPage === 'Home' ? 'nav-link active-tab' : 'nav-link'}
          >
            Home
          </a>
        </li>
      </div>
      <div className=' animate__animated animate__delay-1s animate__backInDown'>
        <li className="nav-item animate__animated animate__delay-1s animate__slower animate__fadeIn">
          <a
            href="#about"
            onClick={() => mobileNav('About')}
            className={currentPage === 'About' ? 'nav-link active-tab' : 'nav-link'}
          >
            About
          </a>
        </li>
      </div>
      <div className=' animate__animated animate__delay-2s animate__backInDown'>
        <li className="nav-item animate__animated animate__delay-2s animate__slower animate__fadeIn">
          <a
            href="#portfolio"
            onClick={() => mobileNav('Portfolio')}
            className={currentPage === 'Portfolio' ? 'nav-link active-tab' : 'nav-link'}
          >
            Portfolio
          </a>
        </li>
      </div>
      <div className=' animate__animated animate__delay-3s animate__backInDown'>
        <li className="nav-item animate__animated animate__delay-3s animate__slower animate__fadeIn">
          <a
            href="#Resume"
            onClick={() => mobileNav('Resume')}
            className={currentPage === 'Resume' ? 'nav-link active-tab' : 'nav-link'}
          >
            Resume
          </a>
        </li>
      </div>
      <div className=' animate__animated animate__delay-4s animate__backInDown'>
        <li className="nav-item animate__animated animate__delay-4s animate__slower animate__fadeIn">
          <a
            href="#contact"
            onClick={() => mobileNav('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active-tab' : 'nav-link'}
          >
            Contact
          </a>
        </li>
      </div>
      </ul>
    </div>
    </div>
  );
}

export default NavTabsMobile;
