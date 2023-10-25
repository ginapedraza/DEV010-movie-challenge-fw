import docuPulseLogo from '../../assets/logo-web-docuPulse-noBackground.png';
//import arrowImage from '../../assets/arrow.png';
import '../Home/Home.css';
import MovieFilter from '../MovieFilter/MovieFilter';
import SortBy from '../SortBy/SortBy';
import './header.css';

interface HeaderProps {
  onLatestReleasesClick: (latestReleases: boolean) => void;
  onOlderClick: (older: boolean) => void;
  onChangeSortBy: (sortBy: string)=> void;
}

const Header: React.FC<HeaderProps> = ({ onLatestReleasesClick, onOlderClick, onChangeSortBy }) => {
  return (
    <header className='header'>
      <div className='header-container'>
        <img src={docuPulseLogo} className='logo' />
        <div className='dropDown-button'>
          <MovieFilter onLatestReleasesClick={() => onLatestReleasesClick(true)} onOlderClick={() => onOlderClick(true)} />
        </div>
        <div className='dropDown-button'>
          <SortBy onChangeSortBy={onChangeSortBy}/>

    </div>
        </div>
    </header>
  );
};

export default Header;