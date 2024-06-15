import { DataTypes } from "sequelize";
import config from "../../config/index.js";
import database from "../../boot/db.js";

export const productImageSchema = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    unique: true,
  },
  path: {
    type: DataTypes.STRING(500),
    allowNull: false,
  },
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "product",
      key: "id",
    },
  },
};
const ProductImage = database.core.define("product", productImageSchema, {
  ...config.database.model,
  timestamp: false,
});
export default ProductImage;
