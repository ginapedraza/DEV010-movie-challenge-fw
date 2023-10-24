import React, { Dispatch, useState, SetStateAction } from 'react';
import arrowImage from '../../assets/arrow.png';

interface MovieFilterProps {
  onOptionSelect: Dispatch<SetStateAction<string>>;
}

const MovieFilter: React.FC<MovieFilterProps> = ({ onOptionSelect }) => {
  const [isOptionVisible, setIsOptionVisible] = useState(false);

  const filterOptions = (selectedOption: string) => {
    setIsOptionVisible(false); // Ocultar las opciones
    onOptionSelect(selectedOption); // Comunicar la opción seleccionada
    console.log(`Selected option: ${selectedOption}`);
  };

  return (
    <div className='date-filter-wrapper'>
      <button className='date-filter' onClick={() => setIsOptionVisible(!isOptionVisible)}>
        Filter by Release Date <img src={arrowImage} className='arrowImage' alt='Arrow down' />
      </button>
      {isOptionVisible && (
        <div className='options'>
          <ul>
            <li onClick={() => filterOptions('latestReleases')}>Latest Releases</li>
            <li onClick={() => filterOptions('lastDecade')}>Last Decade</li>
            <li onClick={() => filterOptions('oldest')}>Oldest</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MovieFilter;
