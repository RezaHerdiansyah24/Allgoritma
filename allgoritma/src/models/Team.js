import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Team = db.define('team',{
    name:{
        type: DataTypes.STRING
    },
    tanggal_lahir:{
        type: DataTypes.DATE
    },
    jabatan:{
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

export default Team;