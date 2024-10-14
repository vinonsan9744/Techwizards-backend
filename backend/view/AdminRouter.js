import express from "express";
import { getAllAdmins, addAdmin } from "../controller/AdminController.js";
const router = express.Router();

router.get("/getAllAdmins", getAllAdmins); // Route for getting all admins
router.post("/addAdmin", addAdmin); // Route for adding an admin

export default router;
