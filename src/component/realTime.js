import { useState, useEffect } from "react";


const Time = () =>{
    const [time, setTime] = useState(Date.now());

    useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    const cvt = (time) =>{
        const nowDate = new Date(time);

        const hours = nowDate.getHours();
        const minutes = nowDate.getMinutes();
        const seconds = nowDate.getSeconds();

        const formattedHours = String(hours).padStart(2, '0');
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(seconds).padStart(2, '0');
        
        return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    }

    const getDoW = (time) => {
        const nowDate = new Date(time);

        // Extract day of the week, month, and day of the month
        const dayOfWeek = nowDate.toLocaleString('default', { weekday: 'long' });
        const month = nowDate.toLocaleString('default', { month: 'long' });
        const dayOfMonth = nowDate.getDate();

        return `${dayOfWeek}, ${month} ${dayOfMonth}`;
    }

    return(
        <div className="current_time center_text">
                {getDoW(time) + ", " + cvt(time)}
        </div>
    )
}

export default Time;