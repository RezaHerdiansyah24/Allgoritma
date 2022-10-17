import express from "express";
import { 
    getFeatures,
    getFeaturesById,
    createFeatures,
    updateFeatures,
    deleteFeatures
 } from "../controller/Features.js";

const featuresrouter = express.Router();

featuresrouter.get('/features', getFeatures);
featuresrouter.get('/features/:id', getFeaturesById);
featuresrouter.post('/features', createFeatures);
featuresrouter.patch('/features/:id', updateFeatures);
featuresrouter.delete('/features/:id', deleteFeatures);

export default featuresrouter;