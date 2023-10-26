import { useState } from 'react';
//import arrowImage from '../../assets/arrow.png';

interface MovieFilterProps {
  onChangeFilterBy: (filter: string) => void;
}
const MovieFilter: React.FC<MovieFilterProps> = ({ onChangeFilterBy}) => {
  const [filterByValue, setFilterByValue] = useState(''); // valor inicial

  const handleFilterByChange = (event:React.ChangeEvent<HTMLSelectElement>) => {
    const selectedFilterValue = event.target.value;
    setFilterByValue(selectedFilterValue);
    onChangeFilterBy(selectedFilterValue);
        console.log('Filter:', selectedFilterValue);
  /*const handleLatestReleasesClick = () => {
    
    onLatestReleasesClick(true); // Pasa true cuando se hace clic en "Latest Releases"

  }
  const handleOlderClick = () => {
    console.log('Se hizo click en 2019 and Older');
    onOlderClick(true);*/
  };
  return (
    <>
    <div className='date-filter-wrapper'>
    <select className= 'sort-by' name='filter-by' id='filter' onChange={handleFilterByChange} value={filterByValue}>
    <option value=''> Filter By Release Date</option>
        <option value='primary_release_date.gte=2020-01-01&primary_release_date.lte=2023-10-25'>Latest Releases</option>
        <option value='primary_release_date.gte=1900-01-01&primary_release_date.lte=2019-12-31'>2019 And Older</option>
      </select>           
    </div>
      

    </>
  );
};

export default MovieFilter;
