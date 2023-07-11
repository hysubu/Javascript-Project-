
// const API = "https://pro.openweathermap.org/data/2.5/forecast/climate?q=odisha&appid=76873305f7a3f5ceeff06b5f1af3ca55"
const APIKEY = "76873305f7a3f5ceeff06b5f1af3ca55"
const city = "odisha"

const api  = "https://api.openweathermap.org/data/2.5/weather?q=odisha&appid=76873305f7a3f5ceeff06b5f1af3ca55&units=matric"
const getweather = async(api)=>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=matric`
    const response = await fetch(url)
    console.log(await response.json() )
}
getweather(api)