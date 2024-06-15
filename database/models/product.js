import { DataTypes } from "sequelize";
import config from "../../config/index.js";
import database from "../../boot/db.js";

export const productSchema = {
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
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  size: {
    type: DataTypes.CHAR(4),
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING(500),
    allowNull: false,
  },
};
const Product = database.core.define("product", productSchema, {
  ...config.database.model,
  timestamp: false,
});
export default Product;
