function TextValue(obj, value) {
    return Object.assign(obj, {value})
}

function NumericValue(obj, number, unit){
    return Object.assign(obj, { number, unit })
}

function Data(obj, type, time, place) {
    return Object.assign(obj, {type, time, place})
}

function NumericRange(obj, from, to, unit) {
    function contains(numericValue) {
        return numericValue.getNumber() >= from && numericValue.getNumber() <= to && numericValue.getUnit() === unit
    }
    return Object.assign(obj, {from, to, unit, contains})
}

function TextRange(obj, values) {
    function contains(value){
        for (let v of values)
            if(v === value)
                return true
        return false
    }
    return Object.assign(obj, {values, contains})
}

function DateInterval(obj, from, to){
    function contains(date){
        return date >= from && date <=to
    }
    return Object.assign(obj, {from, to, contains})
}

function WeatherData(obj, numValue, data, numRange){
    Object.assign(obj, data)
    Object.assign(obj, numRange)
    return Object.assign(obj, numValue)
}

function Temperature(obj, value, unit){
    function convertToFi(){
        if (unit === "Fi")
            return value
        unit = "Fi"
        value = temperature * 9/5 + 32
        return value
    }
    function convertToC(){
        if (unit === "C") 
            return value
        unit  = "C"
        value = (32 - value) * 5/9
        return value
    }
    return Object.assign(obj, {convertToFi, convertToC})
}

function Precipitation(obj, value, unit) {
    return Object.assign(obj, {precepitationType})
}

function Wind(obj, direction) {
    return Object.assign(obj, {direction})
}

function CloudCoverage(obj) {
    return Object.assign(obj, {});
}

function create_weather(temperature, temperatureUnit, city, date, windRangeFrom, windRangeTo, windUnit, weatherType) {
    const numValue = NumericValue({}, temperature, temperatureUnit)
    const data = Data({}, weatherType, date, city)
    const numRange = NumericRange({}, windRangeFrom, windRangeTo, windUnit)
    return WeatherData({}, numValue, data, numRange)
}

function WeatherHistory(currentPlace, currentType, currentPeriod)
{
    let weatherDataHistory = []
    function getCurrentPlace(){
        return currentPlace
    }
    function setCurrentPlace(newCurrentPlace){
        currentPlace = newCurrentPlace
    }
    function clearCurrentPlace() {
        currentPlace = ""
    }
    function getCurrentType(){
        return currentType
    }
    function setCurrentType(newCurrentPlace){
        currentType = newCurrentType
    }
    function clearCurrentType() {
        currentType = ""
    }
    function getCurrentPeriod(){
        return currentPeriod
    }
    function setCurrentPeriod(newCurrentPeriod){
        currentPeriod = newCurrentPeriod
    }
    function clearCurrentPeriod() {
        currentPeriod = ""
    }
    function addWeatherData(weatherData){
        for (let weather in weatherData)
            weatherDataHistory.push(weather)
    }
    function data(){
        return weatherData
    }
    return {
            getCurrentPlace,
            setCurrentPeriod, 
            clearCurrentPlace, 
            getCurrentType, 
            setCurrentType, 
            clearCurrentType,
            getCurrentPeriod,
            setCurrentPeriod,
            clearCurrentPeriod,
            addWeatherData,
            data
        }
}

let a = create_weather(15, "C", "Horsens", Date.now(), 3, 4, "m/s", "Sunny")
console.log(a.type)