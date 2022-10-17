import Features from "../models/Features.js";

export const getFeatures = async(req, res) =>{
    try {
        const response = await Features.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getFeaturesById = async(req, res) =>{
    try {
        const response = await Features.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createFeatures = async(req, res) =>{
    try {
        await Features.create(req.body)
        res.status(201).json({msg: "Features Created"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateFeatures = async(req, res) =>{
    try {
        await Features.update(req.body,{
            where:{
                id: req.params.id
            }
        })
        res.status(200).json({msg: "Features Update"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteFeatures = async(req, res) =>{
    try {
        await Features.destroy({
            where:{
                id: req.params.id
            }
        })
        res.status(200).json({msg: "Features Delete"});
    } catch (error) {
        console.log(error.message);
    }
}