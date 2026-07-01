import GeocoderService from "../services/GeocoderService.js"
import WeatherApiService from "../services/WeatherApiService.js";

export default async function RequisitionsController(req, res) {
    try{

        const data = req.query.city;

        const geoCoder = await GeocoderService(data);

        if(!geoCoder){
            return res.status(500).json({error: "Error on getting coordinates"})
        }

        const lati = geoCoder[0].lat
        const longi = geoCoder[0].lon

        console.log(lati, longi);

        const weatherResponse = await WeatherApiService(lati, longi)

        if(!weatherResponse){
            return res.status(500).json({error: "Error on search weather"})
        }

        const weatherData = { 
            description: weatherResponse.weather[0].description,
            temperature: weatherResponse.main.temp,
            humidity: weatherResponse.main.humidity,
            wind: weatherResponse.wind.speed,
            city: weatherResponse.name,
            country: weatherResponse.sys.country

        }

        res.status(200).json(weatherData);


    }catch(error){
        console.error("Error on RequisitionsController: ", error.message )
        res.status(500).json({error: "Error on server"});
    }
}