import express from "express";
import { getAllLocations,addLocation,getFirstAndLastLocation } from "../controller/LocationController.js";

const router = express.Router();
router.get("/location/getAll", getAllLocations);
router.post("/location/addLocation", addLocation);
router.get('/location/firstlast/:locationType', getFirstAndLastLocation);


export default router;
