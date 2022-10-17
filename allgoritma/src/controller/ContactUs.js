import ContactUs from "../models/ContactUsModel.js";

export const getContactUs = async(req, res) =>{
    try {
        const response = await ContactUs.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getContactUsById = async(req, res) =>{
    try {
        const response = await ContactUs.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createContactUs = async(req, res) =>{
    try {
        await ContactUs.create(req.body)
        res.status(201).json({msg: "Contact Us Created"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateContactUs = async(req, res) =>{
    try {
        await ContactUs.update(req.body,{
            where:{
                id: req.params.id
            }
        })
        res.status(200).json({msg: "Contact Us Update"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteContactUs = async(req, res) =>{
    try {
        await ContactUs.destroy({
            where:{
                id: req.params.id
            }
        })
        res.status(200).json({msg: "Contact Us Delete"});
    } catch (error) {
        console.log(error.message);
    }
}