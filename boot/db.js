import Sequelize from "sequelize";
import config from "../config/index.js";
import { sequelizeConfig } from "../helper/sequelize.js";

const database = {};

// init database
for (const dbSettings of buildConfigs()) {
  const dbObj = dbSettings.id ? `tenant${dbSettings.id}` : "core";
  database[dbObj] = new Sequelize(sequelizeConfig(dbSettings));
//   console.log(database);
  console.log(dbObj);
}

function buildConfigs() {
  const ref = config.database;
  const coreDB = { database: ref.core };
//   console.log([ coreDB ]);
//   console.log(config);

  return [coreDB];
}
// console.log('😍😍😍😍😍',database);

export default database;
