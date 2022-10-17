import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const ContactUs = db.define('contactus',{
    username:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    message:{
        type: DataTypes.STRING
    },
    status:{
        type: DataTypes.STRING
    },
},{
    freezeTableName:true
});
export default ContactUs;

(async ()=> {
    await db.sync();
})();