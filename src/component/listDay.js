import { useState } from "react";

const ListDay = ({weather}) => {
    const [btn, setBtn] = useState(false);
    const [keyModal, setKeyModal] = useState();
    const format = (dateString) => {
        const date = new Date(dateString);
        const dOW = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][
            date.getDay()
        ];
        
        return dOW;
    }

    return(
        <div className="weather-content mt-20 ml-20 flex">
            <div className="flex w-100 horizontal_flex-center">
                {weather?.forecast.forecastday.map((el) => (
                    <>
                        <div onClick={() => {setBtn(true); setKeyModal(el.date)}} 
                        className={"weather flex flex_column " + 
                            (el.date === weather?.forecast.forecastday[0].date ? "bg-064FF0 text_white" : "")
                        }
                        >
                            <div className="flex horizontal_flex-center">
                                {el.date === weather?.forecast.forecastday[0].date ? "Today" : format(el.date)}
                            </div>
                            <img className="weather_image center_image" src={el.day.condition.icon} alt=""/>
                            <div className="flex flex_column center_text font_size-12">
                                <span>Humidity</span>
                                <span>{el.day.avghumidity}%</span>
                            </div>
                        </div>
                        {btn && keyModal === el.date &&
                            <div className="pop_up positon-absolute" >
                                <div className="center_text">
                                    <div>{el.date}</div> 
                                </div>
                                <button onClick={() => setBtn(false)} className="close_popup-btn positon-absolute">X</button>
                                <div className="flex pt-20">
                                    <div className="pl-20 w-50">
                                            <div className="">
                                                <span className="font_size-12">Max Temperature:</span>
                                                <span className="pl-20 font_size-12">{el.day.maxtemp_c}&deg;C</span>
                                            </div>
                                            <div className="">
                                                <span className="font_size-12">Sun Rise:</span>
                                                <span className="pl-20 font_size-12">{el.astro.sunrise}</span>
                                            </div>
                                            <div className="">
                                                <span className="font_size-12">Moon Rise:</span>
                                                <span className="pl-20 font_size-12">{el.astro.moonrise}</span>
                                            </div>
                                            <div className="">
                                                <span className="font_size-12">Moon Phase:</span>
                                                <span className="pl-20 font_size-12">{el.astro.moon_phase}</span>
                                            </div>
                                            <div className="">
                                                <span className="font_size-12">Humidity:</span>
                                                <span className="pl-20 font_size-12">{el.day.avghumidity}%</span>
                                            </div>
                                            <div className="">
                                                <span className="font_size-12">Chance Of Snow:</span>
                                                <span className="pl-20 font_size-12">{el.day.daily_chance_of_snow}%</span>
                                            </div>
                                            
                                    </div>
                                    <div className="pl-40 w-50">
                                        <div className="">
                                            <span className="font_size-12">Min Temperature:</span>
                                            <span className="pl-20 font_size-12">{el.day.mintemp_c}&deg;C</span>
                                        </div>
                                        <div className="">
                                            <span className="font_size-12">Sun Set:</span>
                                            <span className="pl-20 font_size-12">{el.astro.sunset}</span>
                                        </div>
                                        <div className="">
                                            <span className="font_size-12">Moon Set:</span>
                                            <span className="pl-20 font_size-12">{el.astro.moonset}</span>
                                        </div>
                                        <div className="position-relative">
                                            <span className="font_size-12">Moon Illumination:</span>
                                            <span className="pl-20 font_size-12">{el.astro.moon_illumination}%</span>
                                        </div>
                                        <div className="position-relative">
                                            <span className="font_size-12">Chance Of Rain:</span>
                                            <span className="pl-20 font_size-12">{el.day.daily_chance_of_rain}%</span>
                                        </div>
                                        <div className="position-relative">
                                            <span className="font_size-12">Condition:</span>
                                            <span className="pl-20 font_size-12">{el.day.condition.text}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </>
                ))}
            </div>
        </div>
    )
}

export default ListDay;