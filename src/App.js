import React, {useState, useEffect} from 'react'
import './App.css';
import {getWeatherData} from './components/WeatherApi'

function App() {

    const [city, setCity] = useState('Lahore');


    const getData = async () => {
        try{

            const data = await getWeatherData(city);

        }catch(error) {
            console.log(error.message);

        }
    }

    return (
        <div className="App">


                    <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter your city name"/>
                    <button type="button" onClick={() => getData()}>Search</button>




        </div>
    );
}

export default App;