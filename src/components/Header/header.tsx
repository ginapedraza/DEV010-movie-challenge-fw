import docuPulseLogo from '../../assets/logo-web-docuPulse-noBackground.png';
//import arrowImage from '../../assets/arrow.png';
import '../Home/Home.css';
import MovieFilter from '../MovieFilter/MovieFilter';
import SortBy from '../SortBy/SortBy';
import './header.css';



interface HeaderProps {
  onChangeFilterBy: (filter: string) => void;
  onChangeSortBy: (sortBy: string)=> void;

}

const Header: React.FC<HeaderProps> = ({ onChangeFilterBy, onChangeSortBy}) => {


  return (
    <header className='header'>
      <section className='header-container'>
      
      <img src={docuPulseLogo} className='logo'/>
      
        <section className='dropDown-button'>
          <MovieFilter onChangeFilterBy={onChangeFilterBy} />
        </section>
        <section className='dropDown-button'>
          <SortBy onChangeSortBy={onChangeSortBy}/>

    </section>
        </section>
    </header>
  );
};

export default Header;