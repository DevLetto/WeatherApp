export default function Sugestion({setCity, suggestion, setSuggestion}){
    
   function selectSuggestion(text){
    setSuggestion([])
    setCity(text)
   } 

   

    return (
        
        <div>
            <ul>

            {suggestion.map((city) => (
                <li>
                    <button 
                    onClick={() => selectSuggestion(`${city.name}, ${city.state}, ${city.country} `)}
                    className="bg-container border border-white border-t-black  text-white h-9 w-full text-start pl-1 hover:bg-back">{`${city.name}, ${city.state}, ${city.country} `}</button>
                    

                </li>
            ))}
            </ul>
        </div>
        
    )

}