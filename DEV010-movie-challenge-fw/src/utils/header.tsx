//import * as React from "react"; 
import docuPulseLogo from '../assets/logo-web-docuPulse-noBackground.png';
import arrowImage from '../assets/arrow.png';
import '../styles/Home.css';

const Header = () => {
  return (
    <header className='header'>
      <div className='header-container'>
        <img src = {docuPulseLogo} className= 'logo' />
        <div className='dropDown-button'>
          <button className='movie-language'> Movie Language <img src = {arrowImage} className= 'arrowImage' alt = 'Arrow down' />
          </button>
        </div>

        <div className='dropDown-button'>
          <button className='sort-by'> Sort By <img src = {arrowImage} className= 'arrowImage' alt = 'Arrow down' />
          </button>
        </div>

        <form className='search-bar'></form>

      </div>

    </header>
  );
};


export default Header;
