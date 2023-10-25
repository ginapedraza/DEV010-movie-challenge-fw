import { useState } from 'react';

interface SortByProps {
    onChangeSortBy: (sortBy: string) => void;
  }

const SortBy: React.FC<SortByProps> = ({ onChangeSortBy }) => {
    const [sortByValue, setSortByValue] = useState('popularity.desc'); // valor inicial

    const handleSortByChange = (event:React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;
        setSortByValue(selectedValue);
        onChangeSortBy(selectedValue);
        console.log('Sort By Selected:', selectedValue);
    }
    

    return (
      <>
      <div className='sort-by-wrapper'>
      <select className= 'sort-by' name='sort-by' id='sort' onChange={handleSortByChange} value={sortByValue}>
        <option value=''> Sort By</option>
        <option value='vote_average.desc'>Ratings ↓</option>
        <option value='vote_average.asc'>Ratings ↑</option>
      </select>     
      </div>
        
  
      </>
    );
  };
  
  export default SortBy;