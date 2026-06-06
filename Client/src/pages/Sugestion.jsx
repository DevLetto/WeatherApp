export default function Sugestion({suggestion}){
    
   

    return (
        
        <div>
            {suggestion.map((city) => (
                <p className="bg-container border border-white border-t-black rounded-b text-white">{`${city.name}, ${city.state}, ${city.country} `}</p>
            ))}
        </div>
        
    )

}