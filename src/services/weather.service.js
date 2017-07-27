WeatherService.$inject = ['$http'];

function WeatherService($http){
    const baseUrl = 'https://arcane-brushlands-28157.herokuapp.com/weather/';
    return {
        get: getAll
    }
    function getAll(lat,lon){
        const url = `${baseUrl}${lat},${lon}`;
        return $http.get(url)
                    .then(response => response.data);
    }
}

module.exports = WeatherService;
