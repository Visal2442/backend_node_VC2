import { DataTypes } from "sequelize"
import config from "../config/index.js"
import database from "../boot/db.js"

const userSchema = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    unique: true,
  },
  username: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  phone_number: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  email_verified_at: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  verification_code: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  remember_token: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
};
const User = database.core.define("users", userSchema, {
  ...config.database.model,
  timestamp: false,
});
export default User;