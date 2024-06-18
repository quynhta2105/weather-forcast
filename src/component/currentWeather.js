// import getDoW from "../utils/getDoW";
import Time from "./realTime";

const CurrentWeather = ({weather}) =>{
    // const formatLocalDateTime = (dateTimeString) => {
    //     const dateTime = new Date(dateTimeString);
    //     const dayOfWeek = getDoW(dateTimeString);
    //     const month = [
    //       "Jan",
    //       "Feb",
    //       "Mar",
    //       "Apr",
    //       "May",
    //       "Jun",
    //       "Jul",
    //       "Aug",
    //       "Sep",
    //       "Oct",
    //       "Nov",
    //       "Dec",
    //     ][dateTime.getMonth()];
    //     const date = dateTime.getDate();
    //     const hours = dateTime.getHours() % 12 || 12;
    //     const minutes = dateTime.getMinutes().toString().padStart(2, "0");
    //     const ampm = dateTime.getHours() >= 12 ? "PM" : "AM";
    //     return `${dayOfWeek}, ${month} ${date}, ${hours}:${minutes} ${ampm}`;
    // };
    
    return(
        <div className="current_weather-content ml-20 mt-20">
            <div className="current_time center_text">
                {/* {formatLocalDateTime(weather?.location.localtime)} */}
                {/* <Time/> */}
            </div>
            <div>
                <div className="pt-20 pl-20 flex vertical_flex-center">
                    <img className="current_weather-image" src={weather?.current.condition.icon} alt=""/>
                    <div className="current_temperature pl-20">{Math.round(weather?.current.temp_c)}&deg;C</div>
                </div>
                <div className="flex horizontal_flex-center detail_current-weather flex-wrap mw-100">
                    {weather?.current.condition.text}
                </div>
            </div>
            <div className="flex space_around pt-10">
                <div className="flex flex_column">
                    <span>Humidity</span>
                    <span className="flex horizontal_flex-center pt-10">{weather?.current.humidity}%</span>
                </div>
                <div className="flex flex_column">
                    <span>Wind speed</span>
                    <span className="flex horizontal_flex-center pt-10">{weather?.current.wind_kph}km/h</span>
                </div>
            </div>
        </div>
    );
}

export default CurrentWeather;