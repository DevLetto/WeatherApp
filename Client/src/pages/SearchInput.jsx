import { Search } from "lucide-react";
import Sugestion from "./Sugestion";

export default function SearchInput({ city, setCity, getWeather, onKeyClick, handleChange, suggestion }) {
  return (
    <div className=" flex flex-col ">
      <div className="relative">
        <input
          type="text"
          value={city}
          onChange={handleChange}
          onKeyDown={(e) => onKeyClick(e)}
          className="w-65 h-10 bg-white pl-2 pr-7 truncate rounded-md font-[Arial] border-2 border-container  focus:border-purple-950 focus:outline-none "
          placeholder="Enter a city name..."
        />
        <Search onClick={getWeather}  className="absolute bottom-2 left-58" />
      </div>
      <div>
        <Sugestion suggestion={suggestion}/>
      </div>
    </div>
  );
}
