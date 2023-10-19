//import docuPulseLogo from '../assets/logo-web-docuPulse-noBackground.png';
import '../../styles/App.css';
import './Home.css';
import '../../utils/header.css';
import Header from '../../utils/header.tsx';
import MovieList from '../MovieList/MovieList.tsx';
import posterHome from '../../assets/poster-home.png';

const Home = () => {
  return (
    <>
      <div>
        <Header />
      </div>

      <div className='poster-container'>
        <img src = {posterHome} className= 'posterHome' alt = 'poster'/>
        <div className='title-container'>
          <h1 className="poster-title">Uncover Reality, One Film at a Time...</h1>
        </div>
      </div>

      <div>
        <MovieList />
      </div>
    </>
  );
};

export default Home;

