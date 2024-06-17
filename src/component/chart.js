import { Line } from "react-chartjs-2"
import { Chart as ChartJS, registerables } from 'chart.js';
import { useData } from "../utils/context";

ChartJS.register(...registerables);
const ChartComponent = ({weather}) => {

    const {date} = useData();

    const time = weather?.forecast.forecastday[date-1].hour.map((el) => el.time.split(' ')[1].split(':')[0]);
    const tph = weather?.forecast.forecastday[date-1].hour.map((el) => el.temp_c)
    const humidity = weather?.forecast.forecastday[date-1].hour.map((el) => el.humidity)
    const uv = weather?.forecast.forecastday[date-1].hour.map((el) => el.uv)
    const now = new Date();
    return(
        <div className=" flex horizontal_flex-center flex_column">
            <div className="chart-content mt-20 ml-20 pb-20 pl-40">
                {
                    <>
                        {tph &&
                            <Line
                            options={{
                                plugins: {
                                    legend: {
                                        display: true
                                    }
                                },
                                scales: {
                                    x: {
                                        display: false
                                    },
                                    y: {
                                        display: false,
                                        beginAtZero: true,
                                    },
                                },
                                elements: {
                                    point:{
                                        radius: 2
                                    }
                                }
                            }}
                                data={{
                                    labels: time,
                                    datasets:[
                                    {
                                        label: "Temperature",
                                        data: tph,
                                        borderWidth: 1,
                                        borderColor: '#064FF0',
                                        backgroundColor: '#E7FDFF',
                                        fill: false,
                                    },
                                    {
                                        label: "Humidity",
                                        data: humidity,
                                        borderWidth: 1,
                                        borderColor: '#D061EC',
                                        backgroundColor: '#E3BFEC',
                                        fill: false,
                                    },
                                    {
                                        label: "UV",
                                        data: uv,
                                        borderWidth: 1,
                                        borderColor: '#D53B3B',
                                        backgroundColor: '#EED6D6',
                                        fill: false,
                                    }
                                ]
                                }}
                            ></Line>
                        }
                    </>
                }
            </div>
            <div className="hour-content pt-10 ml-20 ml-65 flex nowrap">
                {weather?.forecast.forecastday[0].hour.map((el) => (
                    <>
                        <div className="hour">
                            <span className="font_size-12 hour_temp flex horizontal_flex-center">{Math.round(el.temp_c)}&deg;C</span>
                            <div className="hour_img">
                                <img className="hour-img" src={el.condition.icon} alt="" ></img>
                            </div>
                            <span className="font_size-12 hour_time flex horizontal_flex-center">
                                {el.time.split(' ')[1].split(':')[0] === now.getHours().toString() ? "Now" : el.time.split(' ')[1]}
                            </span>
                        </div>
                    </>
                ))
                    
                }
            </div>
        </div>
    );
}

export default ChartComponent;