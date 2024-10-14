import express, { Router } from "express";
import cors from 'cors';
import { connection } from "./postgres/postgres.js";
import locationRouter from "./view/LocationRouter.js"; 
import locomotivePilotRouter from "./view/LocomotivePilotRouter.js";
import  adminRouter from "./view/AdminRouter.js"; 


const app = express();
app.use(express.json())
app.use(cors())

app.use('/location', locationRouter);
app.use('/locomotivePilot', locomotivePilotRouter);
app.use('/admin', adminRouter);


const PORT=8000;
app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
});
connection();