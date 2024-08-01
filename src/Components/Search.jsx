import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchData, eventHandler, searchWeather }) => {
  const handleChange = (e) => {
    eventHandler(e.target.value);
  };

  const HandleSearch = () => {
    searchWeather();
  };

  return (
    <div className='flex gap-4 items-center'>
      <input
        type="text"
        value={searchData}
        onChange={handleChange}
        placeholder="Enter City Name"
        className='p-2 border border-gray-300 rounded-lg text-pink-700 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
      />
      <button
        onClick={HandleSearch}
        className='px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300'
      >
        Search
      </button>
    </div>
  );
};

Search.propTypes = {
  searchData: PropTypes.string.isRequired,
  eventHandler: PropTypes.func.isRequired,
  searchWeather: PropTypes.func.isRequired,
};

export default Search;
