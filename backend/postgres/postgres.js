import { Sequelize } from "sequelize";


const sequelize = new Sequelize('TechWizard', 'postgres', 'root', {
    host: 'localhost',
    dialect: 'postgres'
});
const connection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        await sequelize.sync();
        console.log('Database synced successfully.');

    }
    catch (error) {
        console.error('Unable to connect to the database:', error);
    }

}
export {
    connection,
};
