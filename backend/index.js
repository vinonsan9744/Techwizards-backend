import express, { Router } from "express";
import { connection } from "./postgres/postgres.js";

const app = express();


const PORT=8000;
app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
});
connection();