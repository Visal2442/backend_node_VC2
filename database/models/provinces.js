import { DataTypes } from "sequelize"
import config from "../../config/index.js"
import database from "../../boot/db.js"

export const provinceSchema = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    unique: true,
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  }
};
const Province = database.core.define("provinces", provinceSchema, {
  ...config.database.model,
  timestamp: false,
});
export default Province;