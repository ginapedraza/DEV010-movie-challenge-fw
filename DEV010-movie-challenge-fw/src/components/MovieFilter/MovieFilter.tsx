//import { useState } from 'react';
//import arrowImage from '../../assets/arrow.png';

interface MovieFilterProps {
  onLatestReleasesClick: (latestReleases: boolean) => void;
}
const MovieFilter: React.FC<MovieFilterProps> = ({ onLatestReleasesClick }) => {
  const handleLatestReleasesClick = () => {
    onLatestReleasesClick(true); // Pasa true cuando se hace clic en "Latest Releases"
  };
  return (
    <div className='date-filter-wrapper'>
      <button className='date-filter' onClick={handleLatestReleasesClick}>Latest Releases</button>
           
    </div>
  );
};

export default MovieFilter;
