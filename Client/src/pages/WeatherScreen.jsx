import { Cloud, Loader } from "lucide-react";
import SearchInput from "./SearchInput";
import { useEffect, useState } from "react";
import WeatherInfo from "./WeatherInfo";

export default function WeatherScreen() {

  // const ip = import.meta.env.VITE_IP;
  const api_url = `http://${window.location.hostname}:8080/weather`;

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showInfo, setShowInfo] = useState(false);

  const getWeather = async () => {

    if(city.trim() === ""){
      setError("Please enter a city name.");
      setShowInfo(false);
      return;
    }

    setLoading(true);
    setError(null);
    setShowInfo(false);
    try {
      const response = await fetch(`${api_url}?city=${city}`);

      if (!response.ok) {
        console.error("Failed to fetch weather data: ", response.statusText);
        setError("Failed to fetch weather data. Please try again.");
        setShowInfo(false);                 
        return;
      }

      const data = await response.json();

      setWeather(data);
    } catch (error) {
      console.error("Error fetching weather: ", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log(weather);
    if(weather.length !== 0){
      setShowInfo(true);

    }
  }, [weather]);

  function onKeyClick(event) {
    if (event.key == "Enter") {
      getWeather();
    }
  }

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
            <SearchInput
              city={city}
              setCity={setCity}
              getWeather={getWeather}
              onKeyClick={onKeyClick}
            />
          </div>
        </section>
        <section >
          {loading && (
            <div className="flex items-center flex-col">
              <Loader className="text-white size-10 animate-spin" />
              <p className="text-white text-2xl">Loading...</p>
            </div>
          )}
          {error && <p className="text-red-500 font-[Arial] text-xl text-center">{error}</p>}
          {showInfo && <WeatherInfo weather={weather} />}
        </section>
      </main>
    </div>
  );
}
