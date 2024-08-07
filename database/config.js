import config from "../config/index.js";
import { sequelizeConfig } from "../helper/sequelize.js";

const configDatabase = {
  development: sequelizeConfig({ database: config.database.core }),
  production: sequelizeConfig({ database: config.database.core }),
  test: sequelizeConfig({ database: config.database.core }),
};

export default configDatabase;
