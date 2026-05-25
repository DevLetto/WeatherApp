
export default async function SuggestionsService(city){
     try{
        const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=0&appid=${process.env.API_KEY}`)

        const data = await response.json();

        
        return data
    }catch(error){
        console.error("Error on SuggestionsService: ", error.message);
        throw error;
    }

}