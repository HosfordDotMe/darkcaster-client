const weatherData = require('../../mocks/weather.json');
WeatherService.$inject = ['$http'];

function WeatherService ($http){
    const baseUrl = 'https://arcane-brushlands-28157.herokuapp.com/weather/';
    return {
        //label : function name
        getCurrentWeather: getCurrently
    }
    function getCurrently(lat,lon){
        const url = `${baseUrl}${lat},${lon}`;
        return $http.get(url)
                    .then(response => {
                        return response.data.currently;
                    })
        //return weatherData.currently;
    }
}

module.exports = WeatherService;
