import Sequelize from "sequelize";
import configFile from "../config/config.js"
import {Menu} from "./Menu.js";

const env = process.env.NODE_ENV || 'dev';
const config = configFile[env];
const sequelize = new Sequelize(config.database, config.username, config.password, config)

const db = {
    sequelize,
    Menu
};

Menu.init(sequelize);
Menu.associate(db);

export default db