import express from "express";
import { 
    getTeam,
    getTeamById,
    updateTeam,
    deleteTeam,
    saveTeam
 } from "../controller/Team.js";

const teamrouter = express.Router();

teamrouter.get('/team', getTeam);
teamrouter.get('/team/:id', getTeamById);
teamrouter.patch('/team/:id', updateTeam);
teamrouter.delete('/team/:id', deleteTeam);
teamrouter.post('/team', saveTeam);

export default teamrouter;