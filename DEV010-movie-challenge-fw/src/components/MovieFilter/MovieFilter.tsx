//import { useState } from 'react';
//import arrowImage from '../../assets/arrow.png';

interface MovieFilterProps {
  onLatestReleasesClick: (latestReleases: boolean) => void;
  onOlderClick: (older: boolean) => void;
}
const MovieFilter: React.FC<MovieFilterProps> = ({ onLatestReleasesClick, onOlderClick }) => {
  const handleLatestReleasesClick = () => {
    
    onLatestReleasesClick(true); // Pasa true cuando se hace clic en "Latest Releases"

  }
  const handleOlderClick = () => {
    console.log('Se hizo click en 2019 and Older');
    onOlderClick(true);
  };
  return (
    <>
    <div className='date-filter-wrapper'>
      <button className='date-filter' onClick={handleLatestReleasesClick}>Latest Releases</button>
      <button className='date-filter-older' onClick={handleOlderClick}>2019 And Older</button>      
    </div>
      

    </>
  );
};

export default MovieFilter;
