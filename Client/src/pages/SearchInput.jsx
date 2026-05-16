import { Search } from "lucide-react";
import Sugestion from "./Sugestion";

export default function SearchInput({ city, setCity, getWeather }) {
  return (
    <div className=" flex flex-col ">
      <div className="relative">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-65 h-8 bg-white pl-2 pr-7 truncate rounded font-[Arial]"
            placeholder="Enter a city name..."
          />
          <Search onClick={getWeather} className="absolute bottom-1 left-58" />
      </div>
      <div>
        <Sugestion city={city} />
      </div>
    </div>
  );
}
