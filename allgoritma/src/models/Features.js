import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Features = db.define('features',{
    name:{
        type: DataTypes.STRING
    },
    description:{
        type: DataTypes.STRING
    },
},{
    freezeTableName:true
});

export default Features;