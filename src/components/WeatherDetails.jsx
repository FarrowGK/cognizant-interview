import React from 'react';

import data from '../utils/data.json';

const WeatherDetails = () => {
    return(
       <div>
           {States.IL.cities.name}
           {States.IL.cities.forecast.date}
           {States.IL.cities.forecast.temperature}
           {States.IL.cities.forecast.feels}
       </div>
    )
}

export default WeatherDetails;