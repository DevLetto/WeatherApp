
export default async function WeatherApiService(lat, long){
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${process.env.API_KEY}`)

        const data = await response.json()

        return data

    }catch(error){
        console.error("Error on WeatherApiService: ", error.message );
        throw error;
    }
}