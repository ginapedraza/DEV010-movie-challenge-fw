import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import MoviePage from './components/MoviePage/MoviePage';
import { FilterSortProvider } from './components/filterAndSort/FilterSortContext'; // Importa el contexto
//import ErrorPage from './components/Error/error-page';

const App: React.FC = () => {
  return (
    <div className="App">
      <FilterSortProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/movie/:movieId' element={<MoviePage />} />
          </Routes>
        </Router>
      </FilterSortProvider>
    </div>
  );
}


export default App;
