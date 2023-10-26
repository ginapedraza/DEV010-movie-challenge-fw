import { useState  } from 'react';
import '../../styles/App.css';
import './Home.css';
import '../Header/header.css';
import Header from '../Header/header.tsx';
import MovieList from '../MovieList/MovieList.tsx';
import posterHome from '../../assets/poster-home.png';

const Home = () => {
  //Se crea la variable de estado filterByValue y sortByValue para manejar los estados cuando cambie
  const [filterByValue, setFilterByValue] = useState(''); // valor inicial
  const [sortByValue, setSortByValue] = useState('popularity.desc'); // valor inicial

//Función para manejar el cambio del valor de Filter, establece el nuevo valor según el seleccionado
  const onChangeFilterBy = (selectedFilterValue: string) => {
    setFilterByValue(selectedFilterValue);

  }
//Función para manejar el cambio del valor de sort, establece el nuevo valor según el seleccionado
  const onChangeSortBy = (selectedValue: string) => {
    setSortByValue(selectedValue);
  }
//Se representa la estructura del componente en elementos JSX
  return (
    <>
      <div>
      <Header
  onChangeFilterBy={onChangeFilterBy}
  onChangeSortBy={onChangeSortBy}
    />
      </div>

      <div className='poster-container'>
        <img src = {posterHome} className= 'posterHome' alt = 'poster'/>
        <div className='title-container'>
          <h1 className="poster-title">
              Uncover Reality, One Film at a Time...
          </h1>
        </div>
      </div>

      <div>
        <MovieList filterByValue={filterByValue} sortByValue={sortByValue}/>
      </div>
    </>
  );
};

export default Home;

