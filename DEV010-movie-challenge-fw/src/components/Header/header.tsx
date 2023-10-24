import docuPulseLogo from '../../assets/logo-web-docuPulse-noBackground.png';
//import arrowImage from '../../assets/arrow.png';
import '../Home/Home.css';
import MovieFilter from '../MovieFilter/MovieFilter';
import './header.css';

interface HeaderProps {
  onLatestReleasesClick: (latestReleases: boolean) => void;
  onOlderClick: (older: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ onLatestReleasesClick, onOlderClick }) => {
  return (
    <header className='header'>
      <div className='header-container'>
        <img src={docuPulseLogo} className='logo' />
        <div className='dropDown-button'>
          <MovieFilter onLatestReleasesClick={() => onLatestReleasesClick(true)} onOlderClick={() => onOlderClick(true)} />
        </div>
        <div className='dropDown-button'>
      <select className= 'sort-by' name="sort-by" id="sort" onChange={() => {}}>
        <option value="1"> Sort By</option>
        <option value="2">A-Z</option>
        <option value="3">Z-A</option>
      </select>
    </div>
        </div>
    </header>
  );
};

export default Header;