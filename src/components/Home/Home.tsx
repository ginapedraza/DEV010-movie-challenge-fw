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
      <section>
        <Header
          onChangeFilterBy={onChangeFilterBy}
          onChangeSortBy={onChangeSortBy}
        />
      </section>

      <section className='poster-container'>
        <img src={posterHome} className='posterHome' alt='poster' />
        <section className='title-container'>
          <h1 className="poster-title">
            Uncover Reality, One Film at a Time...
          </h1>
        </section>
      </section>

      <section>
        <MovieList filterByValue={filterByValue} sortByValue={sortByValue} />
      </section>
    </>
  );
};

export default Home;