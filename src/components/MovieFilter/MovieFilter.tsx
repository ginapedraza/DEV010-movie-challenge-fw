import { useState } from 'react';

// Props que utilizará el filtro: la función que maneja el estado y cambia el valor del filter
interface MovieFilterProps {
  onChangeFilterBy: (filter: string) => void;
}

const MovieFilter: React.FC<MovieFilterProps> = ({ onChangeFilterBy}) => {
  const [filterByValue, setFilterByValue] = useState(''); // valor inicial

  const handleFilterByChange = (event:React.ChangeEvent<HTMLSelectElement>) => {
    const selectedFilterValue = event.target.value; //Toma el valor del option seleccionado
    setFilterByValue(selectedFilterValue);
    onChangeFilterBy(selectedFilterValue);
      

  };
  return (
    <>
    <section className='date-filter-wrapper'>
    <select className= 'sort-by' name='filter-by' data-testid='filter' onChange={handleFilterByChange} value={filterByValue}>
    <option value=''>Filter By Release Date</option>
        <option value='primary_release_date.gte=2019-12-31&primary_release_date.lte=2023-12-31'>Latest Releases</option>
        <option value='primary_release_date.gte=2010-12-31&primary_release_date.lte=2020-12-31'>Last Decade</option>
        <option value='primary_release_date.gte=2000-12-31&primary_release_date.lte=2009-12-31'>2000s</option>
        <option value='primary_release_date.gte=1990-12-31&primary_release_date.lte=1999-12-31'>90s</option>
        <option value='primary_release_date.gte=1900-01-01&primary_release_date.lte=1989-12-31'>80s And Older</option>
      </select>           
    </section>
      

    </>
  );
};

export default MovieFilter;
