import { MapPin, Wind, Droplets } from "lucide-react";

export default function WeatherInfo({ weather }) {
  return (
    <div className="h-45 w-90  sm:w-110 md:w-150 lg:w-180 xl:w-200 2xl:w-250 rounded-xl bg-container  flex flex-rol pt-5 pl-5 fadeIn ">
      <div className="flex flex-col gap-5  w-1/2">
        <div className=" flex flex-rol items-center gap-1">
          <MapPin className="text-weatherText size-4" />
          <p className="text-xl text-white font-[Arial]">
            {weather.city}, {weather.country}
          </p>
        </div>
        <div className="flex flex-col ">
          <h1 className="text-white text-5xl font-[Arial] font-bold -ml-2">
            {weather.temperature}°C
          </h1>
          <p className="text-weatherText text-xl font-[Arial]">
            {weather.description}
          </p>
        </div>
      </div>
      <div className=" w-1/2 flex justify-end">
        <div className="w-full  flex items-center  justify-end ">
          <ul className=" flex flex-col gap-5   w-max">
            <li className="flex flex-rol text-sm sm:text-lg lg:text-3xl  text-weatherText items-center justify-start"> <Wind className="size-4" />Wind Speed: {weather.wind}km/h</li>
            <li className="flex flex-rol text-sm  sm:text-lg lg:text-3xl  text-weatherText items-center justify-start"><Droplets className="size-5" />Humidity: {weather.humidity}%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
