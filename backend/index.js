import express, { Router } from "express";
import cors from 'cors';
import { connection } from "./postgres/postgres.js";
import router from "./view/LocationRouter.js";

const app = express();
app.use(express.json())
app.use(cors())
app.use(router)


const PORT=8000;
app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
});
connection();