import { MapPin } from "lucide-react";

export default function WeatherInfo({ weather }) {
  return (
    <div className="h-45 w-97 rounded-xl bg-container  flex flex-rol pt-5 pl-5">
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
      <div className="border w-1/2 flex justify-end">
        <div className="w-[90%] border border-pink-500">{/* Parei aqui */}</div>
      </div>
    </div>
  );
}
