import dotenv from "dotenv"
dotenv.config()
import express from 'express';
import cors from 'cors';
const app = express();
const port = 8080
app.use(cors());

import MainRoutes from "./routes/MainRoutes.js"


app.use("/weather", MainRoutes );


app.listen(port, () => console.log(`Server running on port ${port}`));

