const axios = require('axios');



const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=a2a75fba3a81b94dcdfb56e8ced51219&units=metric`)

    return resp.data.main.temp;

}


module.exports = {
    getClima
}