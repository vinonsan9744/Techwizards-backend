import { AdminModel } from "../postgres/postgres.js";

// GET - Retrieve all admins
export const getAllAdmins = async (req, res) => {
  try {
    const admins = await AdminModel.findAll();
    if (admins.length == 0) {
      return res.status(200).json({ "error": "No admins found" });
    }
    return res.status(200).json(admins);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ "error": "Internal server error" });
  }
}

// POST - Add a new admin
export const addAdmin = async (req, res) => {
  const { AdminName, Email, Password } = req.body;
  try {
    const existingAdmin = await AdminModel.findOne({ where: { Email: Email } });

    if (existingAdmin) {
      return res.status(200).json({ message: "Admin with this email already exists" });
    }

    const newAdmin = await AdminModel.create({
      AdminName,
      Email,
      Password,
    });

    return res.status(201).json({ message: "Admin added successfully", newAdmin });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ "error": "Internal server error" });
  }
}
