export default function WeatherInfo({weather}){
    return(
        <div className="h-40 w-150 border">
            <p>{weather.city || ""}</p>
            <p>{weather.country || ""}</p>
            <p>{weather.temperature || ""}</p>
            <p>{weather.description || ""}</p>
            <p>{weather.humidity || ""}</p>
            <p>{weather.wind || ""}</p>
        </div>
    )
}