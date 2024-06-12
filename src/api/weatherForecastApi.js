import axios from "axios"

const WeatherForecastApi = async (city) => {
    try{
        const adjustedCity = city.toLowerCase()
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .replace(/đ/g, 'd').replace(/Đ/g, 'D').replace(" ", ",");
        
        const response = await axios
        .get(`https://api.weatherapi.com/v1/forecast.json?key=f5ac4be4a19c47d8a3e42522222112&q=${adjustedCity}&days=20&aqi=no&alerts=yes`);
        return response.data;
    }catch{
        return null;
    }
}

export default WeatherForecastApi;