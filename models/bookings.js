import { DataTypes } from "sequelize"
import config from "../config/index.js"
import database from "../boot/db.js"

const bookingSchema ={
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull : false,
        primaryKey: true,
        unique: true
    },
    first_name:{
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    last_name:{
        type: DataTypes.STRING(255),
        allowNull:false
    },
    email:{
        type: DataTypes.STRING(255),
        allowNull:false
    },
    phone_number:{
        type:DataTypes.STRING(20),
        allowNull:false
    },
    check_in_date:{
        type:DataTypes.DATEONLY,
        allowNull:false
    },
    check_out_date:{
        type:DataTypes.DATEONLY,
        allowNull:false
    },
    room_id:{
        type:DataTypes.INTEGER(11),
        allowNull:false
    },
    user_id:{
        type:DataTypes.INTEGER(11),
        allowNull:false,
        references:{
            model: 'users',
            key:'id'
        }
    },
    property_id:{
        type:DataTypes.INTEGER(11),
        allowNull:false,
        references:{
            model: 'properties',
            key:'id'
        }
    }
}
const Booking = database.core.define('bookings', bookingSchema,{
    ...config.database.model,
    timestamp:false,
})
export default Booking