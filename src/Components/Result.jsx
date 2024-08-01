import React from 'react';
import PropTypes from 'prop-types';

function Result({ weatherData, historyData, historySearch }) {
  return (
    <div className='p-4 space-y-6'>
      {weatherData && (
        <div className='mb-4 p-6 border border-gray-300 rounded-lg shadow-lg bg-white'>
          <h2 className='text-2xl font-bold mb-4 text-gray-800'>{weatherData.name}</h2>
          <p className='text-lg text-gray-700'>
            Temperature: <span className='font-medium text-red-500'>{weatherData.main.temp}°C</span>
          </p>
          <p className='text-lg text-gray-700'>
            Weather: <span className='font-medium text-blue-500'>{weatherData.weather[0].description}</span>
          </p>
        </div>
      )}

      {historyData.length > 0 && (
        <div className='p-6 border border-gray-300 rounded-lg shadow-lg bg-white'>
          <h2 className='text-2xl font-bold mb-4 text-gray-800'>Search History</h2>
          <ul className='list-disc list-inside space-y-2'>
            {historyData.map((item, index) => (
              <li
                key={index}
                className='cursor-pointer text-lg text-gray-700 hover:text-blue-600'
                onClick={() => historySearch(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

Result.propTypes = {
  weatherData: PropTypes.object,
  historyData: PropTypes.arrayOf(PropTypes.string).isRequired,
  historySearch: PropTypes.func.isRequired,
};

export default Result;
