import { Cloud } from "lucide-react";
import SearchInput from "./SearchInput";
import { useEffect, useState } from "react";

export default function WeatherScreen() {
  const [city, setCity] = useState("");

    

//   console.log(city);

  return (
    <div className="w-screen h-screen bg-back flex items-center justify-center">
      <main className="h-[95%] w-[93%] ">
        <section className="w-full h-[55%] bg-container rounded-xl border-border flex flex-col items-center p-10 ">
          <div>
            <Cloud color="white" size={110} />
          </div>
          <div className="text-center">
            <h1 className="text-6xl text-white font-[Arial]">
              Weather Forecast
            </h1>
            <p className="text-paragraph text-xl mt-2">
              Enter a city name to check the weather
            </p>
          </div>
          <div className="mt-12">
            <SearchInput city={city} setCity={setCity} />
          </div>
        </section>
      </main>
    </div>
  );
}
