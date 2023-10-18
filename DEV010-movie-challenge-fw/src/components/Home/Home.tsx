//import docuPulseLogo from '../assets/logo-web-docuPulse-noBackground.png';
import '../../styles/App.css';
import './Home.css';
import '../../utils/header.css';
import Header from '../../utils/header';
import MovieList from '../MovieList';
//import SearchBar from '../SearchBar';

const Home = () => {
  return (
    <>
      <div>
        <Header />
      </div>

      {/*<div>
        <SearchBar/>
  </div>*/}

      <div>
        <MovieList />
      </div>
    </>
  );
};

export default Home;

