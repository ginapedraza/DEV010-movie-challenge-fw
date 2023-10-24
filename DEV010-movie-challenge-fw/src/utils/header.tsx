import { useState } from 'react';
import docuPulseLogo from '../assets/logo-web-docuPulse-noBackground.png';
import arrowImage from '../assets/arrow.png';
import '../components/Home/Home.css';
import MovieFilter from '../components/MovieFilter/MovieFilter';
import './header.css';

const Header = () => {
  const [selectedOption, setSelectedOption] = useState<string>(''); // Estado para almacenar la opción seleccionada

  const handleOptionSelect = () => {
    setSelectedOption(selectedOption); // Actualiza el estado con la opción seleccionada
  };

  return (
    <header className='header'>
      <div className='header-container'>
        <img src={docuPulseLogo} className='logo' />
        <div className='dropDown-button'>
          <MovieFilter onOptionSelect={handleOptionSelect} />
        </div>

        <div className='dropDown-button'>
          <button className='sort-by'> Sort By <img src={arrowImage} className='arrowImage' alt='Arrow down' /></button>
        </div>
      </div>
    </header>
  );
};

export default Header;
