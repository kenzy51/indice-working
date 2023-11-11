// "use strict";

// const Sequelize = require("sequelize");
// const env = process.env.NODE_ENV || "development";
// const config = require(__dirname + "/../config/config.json")[env];
// const db = {};

// import User from "./user";
// import Listing from "./listing";
// import Manufacturers from "./manufacturer";

// let sequelize;
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//   sequelize = new Sequelize(
//     config.database,
//     config.username,
//     config.password,
//     config
//   );
// }

// db.users = User(sequelize, Sequelize);
// db.listings = Listing(sequelize, Sequelize);
// db.manufacturers = Manufacturers(sequelize, Sequelize);

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// module.exports = db;

"use strict";

import { Sequelize } from "sequelize";
import User from "./user";
import Manufacturers from "./manufacturer";

const env = process.env.NODE_ENV || "development";
// const configPath = path.resolve(__dirname, '..', 'config', 'config.json');
// const config = require(configPath)[env];
const config = require(__dirname + "/../config/config.json")[env];

const sequelize = config.use_env_variable
  ? new Sequelize(process.env[config.use_env_variable], config)
  : new Sequelize(config.database, config.username, config.password, config);

const db = {
  sequelize,
  Sequelize,
  users: User(sequelize, Sequelize),
  manufacturers: Manufacturers(sequelize, Sequelize),
};
export const { users, manufacturers } = db;
export default db;
