//import * as React from "react"; 
import docuPulseLogo from '../assets/logo-web-docuPulse-noBackground.png';
import '../components/Home.css';

const Header = ({ brand }: { brand: string }) => {
  return (
    <header className='header'>
      <img src = {docuPulseLogo} className= 'logo' />
      <p className='header-brand'>{brand}</p>
    </header>
  );
};


export default Header;
