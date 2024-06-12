import './App.css';
import Search from "./component/search";
import CurrentWeather from './component/currentWeather';
import ChartComponent from './component/chart';
import ListDay from './component/listDay';
import WeatherForecastApi from './api/weatherForecastApi';
import { useEffect, useState } from 'react';

function App() {
  const [weatherData, setWeather] = useState();
  const [city, setCity] = useState("Hà Nội")

  useEffect(() => {
    const data = async (cityName) =>{
      try{
        const response = await WeatherForecastApi(cityName);
        setWeather(response)
      }catch(e){
        console.error("Error fetching weather data:", e);
      }
    }
    data(city)
  }, [city]);

  return (
    <div className="App flex">
      <div className='App-content'>
        <Search city={city} setCity={setCity}></Search>
        <div className='flex'>
          <CurrentWeather weather={weatherData} />
          <div>
            <ChartComponent weather={weatherData}></ChartComponent>
            <ListDay weather={weatherData}></ListDay>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
