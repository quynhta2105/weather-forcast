import { useState } from "react";

const Search = ({city, setCity}) => {
    const [cityName, setCityName] = useState(city);

    const handleChange = (event) => {
        setCityName(event.target.value);
      };
    const handleSubmit = (event) => {
        event.preventDefault();
        setCity(cityName);
    };

    return(
        <div className="flex pt-20 pl-20">
            <div>Your City:</div>
            <form className="pl-20" onSubmit={handleSubmit}>
                <input
                    className="input_city"
                    type="text"
                    value={cityName}
                    onChange={handleChange}
                    ></input>
            </form>
        </div>
        
    );
}

export default Search;