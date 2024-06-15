import { DataTypes } from "sequelize"
import config from "../../config/index.js"
import database from "../../boot/db.js"

export const ratingSchema = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    unique: true,
  },
  star:{
    type:DataTypes.INTEGER(11),
    allowNull:false
  },
  user_id:{
    type: DataTypes.INTEGER(11),
    allowNull:false,
    references:{
        model: 'users',
        key: 'id'
    }
  },
  property_id:{
    type: DataTypes.INTEGER(11),
    allowNull:false,
    references:{
        model: 'properties',
        key: 'id'
    }
  }
};
const Rating = database.core.define("ratings", ratingSchema, {
  ...config.database.model,
  timestamp: false,
});
export default Rating;