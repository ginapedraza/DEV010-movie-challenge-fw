import docuPulseLogo from '../../assets/logo-web-docuPulse-noBackground.png';
//import arrowImage from '../../assets/arrow.png';
import '../Home/Home.css';
import MovieFilter from '../MovieFilter/MovieFilter';
import SortBy from '../SortBy/SortBy';
import './header.css';
//import { Link } from 'react-router-dom';
//import { useState } from 'react';

interface HeaderProps {
  onChangeFilterBy: (filter: string) => void;
  onChangeSortBy: (sortBy: string)=> void;

}

const Header: React.FC<HeaderProps> = ({ onChangeFilterBy, onChangeSortBy}) => {


  return (
    <header className='header'>
      <div className='header-container'>
      
        <img src={docuPulseLogo} className='logo' />
      
        <div className='dropDown-button'>
          <MovieFilter onChangeFilterBy={onChangeFilterBy} />
        </div>
        <div className='dropDown-button'>
          <SortBy onChangeSortBy={onChangeSortBy}/>

    </div>
        </div>
    </header>
  );
};

export default Header;