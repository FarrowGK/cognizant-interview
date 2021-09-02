import React, { useState, useEffect} from 'react';

import data from '../utils/data.json';
import Button from '../components/Button';
import WeatherDetails from '../components/WeatherDetails';

const App = () => {
    const [city, setCity] = ("");

    let handleSubmit = () => {
        setCity(City);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Enter City:
                    <input type="text" name="City" />
                </label>
                    <Button />
            </form>
            <WeatherDetails city={city}/>
        </div>
    )
}

export default App;