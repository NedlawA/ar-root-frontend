import { TbSearch } from 'react-icons/tb';
import { useState } from 'react';
import './Search.css'
import PropTypes from 'prop-types'


const Search = props => {
  const initialSearchData = { data: '' };

  const [searchData, setSearchData] = useState(initialSearchData);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setSearchData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true)
    props.handleSearch(searchData);
    setSearchData(initialSearchData);
  };

  
  return (
    <div className={submitted? 'search__submitted' : 'search__container'}>
      <h1>Arabic Root</h1>
      <form className='search__form'>
        <input
          className='search__input'
          id='data'
          name='data'
          onChange={handleChange}
          placeholder='Enter root letters'
          value={searchData.data}
          type='text'
        />
        <button
          aria-label='search'
          className='search__button'
          onClick={handleSearchSubmit}
          type='submit'>
          <i>
            <TbSearch />
          </i>
        </button>
      </form>
    </div>
  );
};

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};
export default Search;
