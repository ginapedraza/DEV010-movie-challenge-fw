import { useState } from 'react';
import arrowImage from '../../assets/arrow.png';


const MovieFilter = () => {
  const [isOptionVisible, setIsOptionVisible] = useState(false);

  const filterOptions = () => {
    setIsOptionVisible(!isOptionVisible);

  };

  return (
    <div className='date-filter-wrapper'>
      <button className='date-filter'onClick={filterOptions} >Filter by Release Date <img src = {arrowImage} className= 'arrowImage' alt = 'Arrow down' /></button>
      {isOptionVisible && (
        
        <div className='options'>
          <ul>
            <li>Latest Releases</li>
            <li>Last Decade</li>
            <li>Oldest</li>
          </ul>
        </div>
       
      )}

            
    </div>
  );
};

export default MovieFilter;
