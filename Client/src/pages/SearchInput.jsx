import { Search } from "lucide-react";
import Sugestion from "./Sugestion";

export default function SearchInput({ city, setCity, getWeather, onKeyClick }) {
  return (
    <div className=" flex flex-col ">
      <div className="relative ">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-65 h-8 bg-white pl-2 pr-7 truncate rounded font-[Arial] border-2 border-container  focus:border-purple-950 focus:outline-none "
          placeholder="Enter a city name..."
        />
        <Search onClick={getWeather} onKeyDown ={(event) => onKeyClick(event)} className="absolute bottom-1 left-58" />
      </div>
      <div>
        
      </div>
    </div>
  );
}
