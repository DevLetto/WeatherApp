import express from 'express';
import dotenv from "dotenv"
dotenv.config()
const app = express();

const city = "Gama"


async function testCall(){

    try{
        const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${process.env.API_KEY}`)

        const data = await response.json();

        console.log(data)
    }catch(error){
        console.error("Erro na chamada da api", error.message);
        throw error;
    }
}

testCall();




app.listen(8080, () => console.log(`Server running on port 8080`));

