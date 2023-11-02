import { DataTypes } from "sequelize"
import config from "../config/index.js"
import database from "../boot/db.js"

const districtSchema = {
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
  },
  province_id:{
    type: DataTypes.INTEGER(11),
    allowNull:false,
    references:{
        model: 'provinces',
        key: 'id'
    }
  }
};
const District = database.core.define("districts", districtSchema, {
  ...config.database.model,
  timestamp: false,
});
export default District;