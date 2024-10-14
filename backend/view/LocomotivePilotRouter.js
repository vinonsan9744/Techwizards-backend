import express from "express";
import { getAllLocomotivePilots, addLocomotivePilot } from "../controller/LocomotivePilotController.js";

const router = express.Router();
router.get("/getAll", getAllLocomotivePilots);
router.post("/addlocomotivePilot", addLocomotivePilot);

export default router;
