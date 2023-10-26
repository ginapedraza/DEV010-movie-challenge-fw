/*import { useState } from 'react';
import './Home/Home.css';
import Movie from './Movie/Movie';

interface SearchBarProps {
    allMovies: Movie[]; // Asegúrate de importar el tipo Movie desde tu archivo de definiciones
  }

const SearchBar: React.FC<SearchBarProps> = ({ allMovies }) => {

  const [search, setSearch] = useState('');
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);


  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value;
    setSearch(searchTerm);

    // Filtrar las películas que coinciden con el término de búsqueda
    const filtered = allMovies.filter(movie =>
      movie.original_title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredMovies(filtered);
  };
  return (
    <div className='search-bar-container'>
      <input className='search-bar' type='text' placeholder='Search for films' value= {search} onChange={onChange}></input>

    </div>
  );
};*/



//export default SearchBar;





/*{
  "devDependencies": {
    "@types/jest": "^29.5.5",
    "jest": "^29.7.0",
    "ts-jest": "^29.1.1"
  },
  "dependencies": {
    "node-fetch": "^2.7.0"
  }
}*/
