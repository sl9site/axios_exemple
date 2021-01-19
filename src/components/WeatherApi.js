import axios from 'axios'


const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?';
const API_KEY = '06640051225a0f9081c3e5e72a42d922';


export const getWeatherData = async (cityname) => {
    try{
        const {data} = await axios.get(baseUrl + `q=${cityname}&appid=${API_KEY}`);
        return data;
    }catch(error) {
        throw error;
    }
};