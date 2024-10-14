import { DataTypes } from "sequelize";
import crypto from 'crypto'; // To generate a random part for the AdminId

export const createAdminModel = (sequelize) => {
  const Admin = sequelize.define('Admin', {
    // Custom auto-generated AdminId
    AdminId: {
      type: DataTypes.STRING(9), // Like AID001
      primaryKey: true, // Primary key
      unique: true
    },

    // Admin Name
    AdminName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    // Email with validation to ensure it's unique and follows email format
    Email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true, // Ensures proper email format
      }
    },

    // Password with validation for length and complexity
    Password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [8, 100], // Minimum length of 8 characters
          msg: "Password must be at least 8 characters long."
        },
        isComplexPassword(value) {
          // Ensuring the password contains uppercase, lowercase, and special characters
          const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])/;
          if (!regex.test(value)) {
            throw new Error('Password must contain at least one uppercase letter, one lowercase letter, and one special character.');
          }
        }
      }
    }
  });

  // Auto-generate AdminId before creation
  Admin.beforeCreate(async (admin) => {
    const locationType = 'AID'; // Static part of the AdminId
    const randomDigits = crypto.randomInt(100000, 999999).toString(); // Generates a 6-digit number
    admin.AdminId = `${locationType}${randomDigits}`; // e.g., AID001234
  });

  return Admin;
}
