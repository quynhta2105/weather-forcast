import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import getDoW from "../utils/getDoW";

const ListDay = ({weather}) => {
    const [btn, setBtn] = useState(false);
    const [keyModal, setKeyModal] = useState();

    return(
        <div className="weather-content mt-20 ml-20 flex">
            <div className="flex w-100 horizontal_flex-center">
                {weather?.forecast.forecastday.map((el) => (
                    <>
                        <div onDoubleClick={() => {setBtn(true); setKeyModal(el.date)}} 
                        className={"weather flex flex_column " + 
                            (el.date === weather?.forecast.forecastday[0].date ? "bg-064FF0 text_white" : "")
                        }
                        >
                            <div className="flex horizontal_flex-center">
                                {el.date === weather?.forecast.forecastday[0].date ? "Today" : getDoW(el.date)}
                            </div>
                            <img className="weather_image center_image" src={el.day.condition.icon} alt=""/>
                            <div className="flex flex_column center_text font_size-12">
                                <span>Humidity</span>
                                <span>{el.day.avghumidity}%</span>
                            </div>
                        </div>
                        {btn && keyModal === el.date &&
                            <Modal
                                onHide={() => setKeyModal(false)}
                                show="show"
                                size="lg"
                                aria-labelledby="contained-modal-title-vcenter"
                                centered
                            >
                                <Modal.Header closeButton>
                                <Modal.Title id="contained-modal-title-vcenter">
                                    {el.date}
                                </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <div className="flex pt-20">
                                        <div className="pl-20 w-50">
                                                <div className="">
                                                    <span className="">Max Temperature:</span>
                                                    <span className="pl-20 ">{el.day.maxtemp_c}&deg;C</span>
                                                </div>
                                                <div className="">
                                                    <span className="">Sun Rise:</span>
                                                    <span className="pl-20 ">{el.astro.sunrise}</span>
                                                </div>
                                                <div className="">
                                                    <span className="">Moon Rise:</span>
                                                    <span className="pl-20 ">{el.astro.moonrise}</span>
                                                </div>
                                                <div className="">
                                                    <span className="">Moon Phase:</span>
                                                    <span className="pl-20 ">{el.astro.moon_phase}</span>
                                                </div>
                                                <div className="">
                                                    <span className="">Humidity:</span>
                                                    <span className="pl-20 ">{el.day.avghumidity}%</span>
                                                </div>
                                                <div className="">
                                                    <span className="">Chance Of Snow:</span>
                                                    <span className="pl-20 ">{el.day.daily_chance_of_snow}%</span>
                                                </div>
                                                
                                        </div>
                                        <div className="pl-40 w-50">
                                            <div className="">
                                                <span className="">Min Temperature:</span>
                                                <span className="pl-20 ">{el.day.mintemp_c}&deg;C</span>
                                            </div>
                                            <div className="">
                                                <span className="">Sun Set:</span>
                                                <span className="pl-20 ">{el.astro.sunset}</span>
                                            </div>
                                            <div className="">
                                                <span className="">Moon Set:</span>
                                                <span className="pl-20 ">{el.astro.moonset}</span>
                                            </div>
                                            <div className="position-relative">
                                                <span className="">Moon Illumination:</span>
                                                <span className="pl-20 ">{el.astro.moon_illumination}%</span>
                                            </div>
                                            <div className="position-relative">
                                                <span className="">Chance Of Rain:</span>
                                                <span className="pl-20 ">{el.day.daily_chance_of_rain}%</span>
                                            </div>
                                            <div className="position-relative">
                                                <span className="">Condition:</span>
                                                <span className="pl-20 ">{el.day.condition.text}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Modal.Body>
                                <Modal.Footer>
                                <Button onClick={() => setBtn(false)}>Close</Button>
                                </Modal.Footer>
                          </Modal>
                        }
                    </>
                ))}
            </div>
        </div>
    )
}

export default ListDay;