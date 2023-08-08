import { TbSearch } from 'react-icons/tb';
import { useState } from 'react';
import './Search.css'
import PropTypes from 'prop-types'


const Search = props => {
  const initialSearchData = { data: '' };

  const [searchData, setSearchData] = useState(initialSearchData);

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setSearchData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    props.handleSearch(searchData);
    setSearchData(initialSearchData);
  };

  return (
    <>
      <h1>Arabic Root</h1>
      <form>
        <input
          className='searchBar'
          id='data'
          name='data'
          onChange={handleChange}
          placeholder='Enter root letters in Arabic or English'
          value={searchData.data}
          type='text'
        />
        <button
          aria-label='search'
          className='searchButton'
          onClick={handleSearchSubmit}
          type='submit'>
          <i>
            <TbSearch />
          </i>
        </button>
      </form>
    </>
  );
};

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};
export default Search;
