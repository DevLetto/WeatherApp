import { Cloud } from "lucide-react";
import SearchInput from "./SearchInput";
import { useEffect, useState } from "react";
import WeatherInfo from "./WeatherInfo";

export default function WeatherScreen() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState([]);

  const getWeather = async () => {

    try{

      const response = await fetch(`http://localhost:8080/weather?city=${city}`);

      if (!response.ok){
        console.error("Failed to fetch weather data: ", response.statusText )
        return
      }

      const data = await response.json();

     setWeather(data)

    }catch(error){
      console.error("Error fetching weather: ", error);
    }
  }
    
  useEffect(()=>{
    console.log(weather)
  },[weather])

//   console.log(city);

  return (
    <div className="w-screen h-screen bg-back flex items-center justify-center pt-3">
      <main className="h-full w-[93%] flex flex-col items-center gap-10">
        <section className="w-full h-100 bg-container rounded-xl border-border flex flex-col items-center p-10 ">
          <div>
            <Cloud color="white" size={90} />
          </div>
          <div className="text-center">
            <h1 className="text-6xl text-white font-[Arial]">
              Weather Forecast
            </h1>
            <p className="text-paragraph text-xl mt-2">
              Enter a city name to check the weather
            </p>
          </div>
          <div className="mt-6  ">
            <SearchInput city={city} setCity={setCity} getWeather={getWeather} />
          </div>
        </section>
        <section>
          <WeatherInfo weather={weather} />
        </section>
      </main>
    </div>
  );
}
