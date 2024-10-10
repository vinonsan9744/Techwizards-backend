import { Sequelize } from "sequelize";

import { createLocationModel } from "../model/LocationSchema.js";

// Setup the connection to PostgreSQL database




const sequelize = new Sequelize('TechWizard', 'postgres', 'root', {
    host: 'localhost',
    dialect: 'postgres'
});


let LocationModel = null;

// Establish the connection and sync the model


const connection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');

        // Initialize the Location model
        LocationModel = await createLocationModel(sequelize);
        await sequelize.sync();
        console.log('Database synced successfully.');

        await sequelize.sync();
        console.log('Database synced successfully.');

    }
    catch (error) {
        console.error('Unable to connect to the database:', error);
    }

}
export {
    connection,
    LocationModel


}

