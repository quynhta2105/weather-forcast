import axios from "axios"

const WeatherForecastApi = async (city) => {
    try{
        const adjustedCity = city.toLowerCase()
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .replace(/đ/g, 'd').replace(/Đ/g, 'D').replace(" ", ",");
        
        const response = await axios
        .get(`${process.env.REACT_APP_API}&q=${adjustedCity}&days=20&aqi=no&alerts=yes`);
        return response.data;
    }catch{
        return null;
    }
}

export default WeatherForecastApi;