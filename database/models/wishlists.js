import { DataTypes } from "sequelize"
import config from "../config/index.js"
import database from "../boot/db.js"

const wishlistSchema = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    unique: true,
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
const Wishlist = database.core.define("wishlists", wishlistSchema, {
  ...config.database.model,
  timestamp: false,
});
export default Wishlist;