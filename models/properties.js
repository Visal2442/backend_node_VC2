import { DataTypes } from "sequelize"
import config from "../config/index.js"
import database from "../boot/db.js"

const propertySchema = {
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
    unique: false,
  },
  price: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  size: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  number_of_floor: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
  },
  number_of_room: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
  },
  number_of_bathroom: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
  },
  number_of_kitchen: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  latitude: {
    type: DataTypes.DECIMAL(18, 9),
    allowNull: false,
  },
  longitude: {
    type: DataTypes.DECIMAL(18, 9),
    allowNull: false,
  },
  available: {
    type: DataTypes.BOOLEAN,
    default: true,
    allowNull: false,
  },
  user_id:{
    type: DataTypes.INTEGER(11),
    allowNull:false,
    references:{
        model: 'users',
        key: 'id'
    }
  },
  district_id:{
    type: DataTypes.INTEGER(11),
    allowNull:false,
    references:{
        model: 'districts',
        key: 'id'
    }
  }
};
const Property = database.core.define("properties", propertySchema, {
  ...config.database.model,
  timestamp: false,
});
export default Property;