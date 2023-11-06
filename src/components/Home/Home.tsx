import React from 'react';
import '../../styles/App.css';
import './Home.css';
import '../Header/header.css';
import Header from '../Header/header.tsx';
import MovieList from '../MovieList/MovieList.tsx';
import posterHome from '../../assets/poster-home.png';
import { useFilterSort } from '../filterAndSort/FilterSortContext.tsx';

const Home: React.FC = () => {
  const { filterByValue, setFilterByValue, sortByValue, setSortByValue } = useFilterSort();

  const onChangeFilterBy = (selectedFilterValue: string) => {
    setFilterByValue(selectedFilterValue);
  }

  const onChangeSortBy = (selectedValue: string) => {
    setSortByValue(selectedValue);
  }

  return (
    <>
      <div>
        <Header
          onChangeFilterBy={onChangeFilterBy}
          onChangeSortBy={onChangeSortBy}
        />
      </div>

      <div className='poster-container'>
        <img src={posterHome} className='posterHome' alt='poster' />
        <div className='title-container'>
          <h1 className="poster-title">
            Uncover Reality, One Film at a Time...
          </h1>
        </div>
      </div>

      <div>
        <MovieList filterByValue={filterByValue} sortByValue={sortByValue} />
      </div>
    </>
  );
};

export default Home;