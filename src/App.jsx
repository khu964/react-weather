import React, { useState } from 'react';
import axios from 'axios';
import Search from './Components/Search';
import Result from './Components/Result';
import weatherImage from './assets/weather.jpg';

const App = () => {
  const [search, setSearch] = useState('');
  const [weather, setWeather] = useState(null);
  const [history, setHistory] = useState([]);
  const [error, setError] = useState('');

  const changeSearch = (value) => {
    setSearch(value);
  };

  const searchWeatherHandler = () => {
    if (search !== '') {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=ecd01cfccde59ab47b5e54c9370d3212&units=metric`)
        .then((response) => {
          if (history.indexOf(search) === -1) {
            setHistory([...history, search]);
          }
          setWeather(response.data);
          setError('');
        })
        .catch((error) => {
          if (error.response && error.response.status === 401) {
            setError('Unauthorized access. Please check your API key.');
          } else {
            setError('An error occurred. Please try again.');
          }
          console.log('Error response', error.response);
        });
    }
  };

  const historyWeatherHandler = (data) => {
    if (data !== '') {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=ecd01cfccde59ab47b5e54c9370d3212&units=metric`)
        .then((response) => {
          if (history.indexOf(data) === -1) {
            setHistory([...history, data]);
          }
          setWeather(response.data);
          setError('');
        })
        .catch((error) => {
          if (error.response && error.response.status === 401) {
            setError('Unauthorized access. Please check your API key.');
          } else {
            setError('An error occurred. Please try again.');
          }
          console.log('Error response', error.response);
        });
    }
  };

  return (
    <div
      className='min-h-screen p-6 flex justify-center items-center'
      style={{
        backgroundImage: `url(${weatherImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='max-w-md w-full bg-white bg-opacity-75 p-6 rounded-lg shadow-lg '>
        <Search searchData={search} eventHandler={changeSearch} searchWeather={searchWeatherHandler} />
        {error && <p className='text-red-600 mt-4'>{error}</p>}
        <div className='mt-6'>
          <Result weatherData={weather} historyData={history} historySearch={historyWeatherHandler} />
        </div>
      </div>
    </div>
  );
};

export default App;
