import React, { useState, useEffect} from 'react';

import data from '../utils/data.json';
import Button from '../components/Button';
import WeatherDetails from '../components/WeatherDetails';

const App = () => {
    return (
        <div>
            <form>
                <label>
                    Enter City:
                    <input type="text" name="City" />
                </label>
                    <Button message={"Hello World!"}/>
            </form>
            <WeatherDetails />
        </div>
    )
}

export default App;