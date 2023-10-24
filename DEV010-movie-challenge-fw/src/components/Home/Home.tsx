//import docuPulseLogo from '../assets/logo-web-docuPulse-noBackground.png';
import { useState } from 'react';
import '../../styles/App.css';
import './Home.css';
import '../../utils/header.css';
import Header from '../../utils/header.tsx';
import MovieList from '../MovieList/MovieList.tsx';
import posterHome from '../../assets/poster-home.png';
import MovieFilter from '../MovieFilter/MovieFilter.tsx';


const Home = () => {
  const [selectedOption, setSelectedOption] = useState<string>(''); // Estado local para la opción seleccionada
  console.log(`selectedOption in Home: ${selectedOption}`);
  return (
    <>
      <div>
        <Header />
        <MovieFilter onOptionSelect={setSelectedOption} />
      </div>

      <div className='poster-container'>
        <img src = {posterHome} className= 'posterHome' alt = 'poster'/>
        <div className='title-container'>
          <h1 className="poster-title">Uncover Reality, One Film at a Time...</h1>
        </div>
      </div>

      <div>
        <MovieList selectedOption={selectedOption} />
        
      </div>
    </>
  );
};

export default Home;

