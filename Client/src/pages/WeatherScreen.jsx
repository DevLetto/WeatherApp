import { Cloud, Loader } from "lucide-react";
import SearchInput from "./SearchInput";
import { useEffect, useState } from "react";
import WeatherInfo from "./WeatherInfo";

export default function WeatherScreen() {
  // const ip = import.meta.env.VITE_IP;
  const api_url = `http://${window.location.hostname}:8080/weather`;
  const suggestion_url = `http://${window.location.hostname}:8080/suggestion`;

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showInfo, setShowInfo] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  const getWeather = async () => {
    if (city.trim() === "") {
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
    if (weather.length !== 0) {
      setShowInfo(true);
    }
  }, [weather]);

  function onKeyClick(event) {
    if (event.key == "Enter") {
      getWeather();
    }
  }

  //Verify if the user is typing
  // useEffect(() => {
  //   if (!city) {
  //     setIsTyping(false);
  //     return;
  //   }

  //   const timeOutId = setTimeout(() => {
  //     setIsTyping(false);
  //     console.log("User stoped typing: ", city);
  //   }, 1000);

  //   return () => clearTimeout(timeOutId);
  // }, [city]);

  const handleChanges = (event) => {
    setCity(event.target.value);
    setIsTyping(true);
  };

  //Suggestions
  useEffect(() => {
    console.log("Effect running")
    //load Suggestions funciton
    const loadSuggestions = async () => {
      if (city.length > 3) {
        setSuggestions([]);
        try {
          const response = await fetch(`${suggestion_url}?city=${city}`);

          if (!response.ok) {
            console.error("Failed to fetch suggestion: ", response.statusText);
          }
          const data = await response.json();

          setSuggestions(Array.isArray(data) ? data : []);

        console.log("Fetch da silva", suggestions)
        } catch (error) {
          console.error("Error fetching suggestions: ", error.message);
        }
        console.log("Fetch running");
      }
    };

    //Verify if the city field is empty
    if (!city) {
      setIsTyping(false);
      setSuggestions([]);
      return;
    }

    //Verify if the suggestion box isnt empty
    if (suggestions.length != 0) {
      console.log("Sugestoes", suggestions);
    } else {
      loadSuggestions();
    }

    const timeOutId = setTimeout(() => {
      setIsTyping(false);

      loadSuggestions();
      console.log("User stoped typing: ", city);
    }, 1000);

    return () => clearTimeout(timeOutId);
  }, [city]);

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
          <div className="mt-6  z-10">
            <SearchInput
              city={city}
              setCity={setCity}
              getWeather={getWeather}
              onKeyClick={onKeyClick}
              handleChange={handleChanges}
              suggestion={suggestions}
              setSuggestion={setSuggestions}
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
          {error && (
            <p className="text-red-500 font-[Arial] text-xl text-center">
              {error}
            </p>
          )}
          {showInfo && <WeatherInfo weather={weather} />}
        </section>
      </main>
    </div>
  );
}
