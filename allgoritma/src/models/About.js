import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const About = db.define('about',{
    description:{
        type: DataTypes.STRING
    },
    image:{
        type: DataTypes.STRING
    },
    url:{
        type: DataTypes.STRING
    },
},{
    freezeTableName:true
});
export default About;