import express from "express";
import { 
    getAbout,
    getAboutById,
    updateAbout,
    deleteAbout,
    saveAbout
 } from "../controller/About.js";

const aboutrouter = express.Router();

aboutrouter.get('/about', getAbout);
aboutrouter.get('/about/:id', getAboutById);
aboutrouter.patch('/about/:id', updateAbout);
aboutrouter.delete('/about/:id', deleteAbout);
aboutrouter.post('/about', saveAbout);

export default aboutrouter;