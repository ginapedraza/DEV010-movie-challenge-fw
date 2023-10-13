import docuPulseLogo from '../assets/logo-web-docuPulse-noBackground.png';
import '../App.css';
import './Home.css';

const Home = () => {

  return (
    <>
      <div>
        <img src={docuPulseLogo} className="logo" alt='DocuPulse logo' />
      </div>

      <div className="movie-cards">
        <p>
          Coming soon...
        </p>
      </div>
    </>
  );
};

export default Home;
