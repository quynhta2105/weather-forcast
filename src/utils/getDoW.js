const getDoW = (dateTimeString) =>{
    const dateTime = new Date(dateTimeString);
        const dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][
          dateTime.getDay()
        ];
    return dayOfWeek;
}

export default getDoW;