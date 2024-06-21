import './App.css';
import './style.css'
import Search from "./component/search";
import CurrentWeather from './component/currentWeather';
import ChartComponent from './component/chart';
import ListDay from './component/listDay';
import WeatherForecastApi from './api/weatherForecastApi';
import { useEffect, useState } from 'react';
import { DataProvider } from './utils/context';

function App() {
  const [weatherData, setWeatherData] = useState();

  const handleGetDataFromAPI = async (cityName) =>{
    try{
      const response = await WeatherForecastApi(cityName);
      setWeatherData(response)
    }catch(e){
      console.error("Error fetching weather data:", e);
    }
  }

  const handleDataFromSearch = (name) => {
    handleGetDataFromAPI(name);
    console.log(name)
  }

  useEffect(() => {
    handleGetDataFromAPI("Hà Nội")
  },[]);

  return (
    <DataProvider>
      <div className="App flex">
        <div className='App-content'>
          <Search sendData={handleDataFromSearch}></Search>
          <div className='flex'>
            <CurrentWeather weather={weatherData} />
            <div>
              <ChartComponent weather={weatherData}></ChartComponent>
              <ListDay weather={weatherData}></ListDay>
            </div>
          </div>
        </div>
      </div>
    </DataProvider>
  );
}

export default App;
