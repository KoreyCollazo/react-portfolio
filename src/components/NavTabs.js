import React from 'react';


function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div>
    <ul className="nav nav-tabs">
      <div className=' animate__animated animate__backInDown'>
        <li className="nav-item animate__animated animate__slower animate__fadeIn">
          <a
            href="#home"
            onClick={() => handlePageChange('Home')}
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
            onClick={() => handlePageChange('About')}
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
            onClick={() => handlePageChange('Portfolio')}
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
            onClick={() => handlePageChange('Resume')}
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
