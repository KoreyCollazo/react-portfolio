import React from 'react';


function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div>
    <ul className="nav nav-tabs">
      <div className=' animate__animated animate__backInDown'>
        <li className="nav-item animate__animated animate__fadeIn">
          <a
            href="#home"
            onClick={() => handlePageChange('Home')}
            className={currentPage === 'Home' ? 'nav-link active-tab' : 'nav-link'}
          >
            Home
          </a>
        </li>
      </div>
      <div className=' animate__animated animate__backInDown'>
        <li className="nav-item animate__animated animate__fadeIn">
          <a
            href="#about"
            onClick={() => handlePageChange('About')}
            className={currentPage === 'About' ? 'nav-link active-tab' : 'nav-link'}
          >
            About
          </a>
        </li>
      </div>
      <div className=' animate__animated animate__backInDown'>
        <li className="nav-item animate__animated animate__fadeIn">
          <a
            href="#portfolio"
            onClick={() => handlePageChange('Portfolio')}
            className={currentPage === 'Portfolio' ? 'nav-link active-tab' : 'nav-link'}
          >
            Projects
          </a>
        </li>
      </div>
      <div className=' animate__animated animate__backInDown'>
        <li className="nav-item animate__animated animate__fadeIn">
          <a
            href="./react-portfolio/assets/Resume-Korey-Collazo.pdf"
            className={currentPage === 'Resume' ? 'nav-link active-tab' : 'nav-link'}
            download
          >
            Resume
          </a>
        </li>
      </div>
      <div className=' animate__animated animate__backInDown'>
        <li className="nav-item animate__animated animate__fadeIn">
          <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active-tab' : 'nav-link'}
          >
            Contact
          </a>
        </li>
      </div>
    </ul>
    </div>
  );
}

export default NavTabs;
