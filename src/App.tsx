import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import MoviePage from './components/MoviePage/MoviePage';
//import ErrorPage from './components/Error/error-page';

const App = () => {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/movie/:movieId' element={<MoviePage />} />
        </Routes>
      </Router>
    </div>
  );
}


export default App;
