import GeocoderService from "../services/GeocoderService.js"

export default async function RequisitionsController(req, res) {
    try{

        const data = req.query.city;

        const response = await GeocoderService(data);

        res.status(200).json(response);


    }catch(error){
        console.error("Error on RequisitionsController: ", error.message )
        res.status(500).json({error: "Error on server"});
    }
}