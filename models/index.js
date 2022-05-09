import Sequelize from "sequelize";
import configFile from "../config/config.js"

const env = process.env.NODE_ENV || 'dev';
const config = configFile[env];

export const sequelize = new Sequelize(config.database, config.username, config.password, config)
