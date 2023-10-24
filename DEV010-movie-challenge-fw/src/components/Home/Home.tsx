//import docuPulseLogo from '../assets/logo-web-docuPulse-noBackground.png';
import { useState  } from 'react';
import '../../styles/App.css';
import './Home.css';
import '../Header/header.css';
import Header from '../Header/header.tsx';
import MovieList from '../MovieList/MovieList.tsx';
//import MovieFilter from '../MovieFilter/MovieFilter';
import posterHome from '../../assets/poster-home.png';

const Home = () => {
  const [latestReleases, setLatestReleases] = useState(false);
  const [older, setOlder] = useState(false);
  return (
    <>
      <div>
      <Header
  onLatestReleasesClick={() => {
    setLatestReleases(!latestReleases);

  }}
  onOlderClick={() => {
    setOlder(!older);
  }}
/>
      </div>

      <div className='poster-container'>
        <img src = {posterHome} className= 'posterHome' alt = 'poster'/>
        <div className='title-container'>
          <h1 className="poster-title">
          {latestReleases
              ? 'Your Favorite Documentaries From 2020 to 2023'
              : 'Uncover Reality, One Film at a Time...'}
          </h1>
        </div>
      </div>

      <div>
        <MovieList latestReleases={latestReleases} older={older}/>
      </div>
    </>
  );
};

export default Home;

