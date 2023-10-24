import docuPulseLogo from '../assets/logo-web-docuPulse-noBackground.png';
import arrowImage from '../assets/arrow.png';
import '../components/Home/Home.css';
import MovieFilter from '../components/MovieFilter/MovieFilter';
import './header.css';

interface HeaderProps {
  onLatestReleasesClick: (latestReleases: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ onLatestReleasesClick }) => {
  
  return (
    <header className='header'>
      <div className='header-container'>
        <img src={docuPulseLogo} className='logo' />
        <div className='dropDown-button'>
          <MovieFilter onLatestReleasesClick={() => onLatestReleasesClick(true)} />
        </div>
        <div className='dropDown-button'>
          <button className='sort-by'>
            Sort By <img src={arrowImage} className='arrowImage' alt='Arrow down' />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;