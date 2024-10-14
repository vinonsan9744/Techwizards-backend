import { LocomotivePilotModel } from "../postgres/postgres.js"; 

// Get all locomotive pilots
export const getAllLocomotivePilots = async (req, res) => {
    try {
        const pilots = await LocomotivePilotModel.findAll();
        if (pilots.length === 0) {
            return res.status(404).json({ message: "No locomotive pilots found" });
        }
        return res.status(200).json(pilots);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal server error" });
    }
};

// Add a new locomotive pilot
export const addLocomotivePilot = async (req, res) => {
    const { locomotiveName, locomotiveEmail, locomotivePhoneNo } = req.body;

    try {
        const existingPilot = await LocomotivePilotModel.findOne({ where: { locomotiveEmail } });
        if (!existingPilot) {
            const newPilot = await LocomotivePilotModel.create(req.body);
            return res.status(201).json({ message: "Locomotive pilot added successfully", newPilot });
        }

        return res.status(409).json({ message: "Locomotive pilot already exists" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal server error" });
    }
};
