import About from "../models/About.js";
import path from "path";
import fs from "fs";

export const getAbout = async(req, res) =>{
    try {
        const response = await About.findAll();
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getAboutById = async(req, res) =>{
    try {
        const response = await About.findOne({
            where:{
                id: req.params.id
            }
        });
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const updateAbout = async(req, res) =>{
    const about = await About.findOne({
        where:{
            id: req.params.id
        }
    });
    if(!about) return res.status(404).json({msg: "No Data Found"});
    let fileName = "";
    if(req.files === null){
        fileName = about.image;
    }else{
        const file = req.files.file;
        const fileSize = file.data.length;
        const ext = path.extname(file.description);
        fileName = file.md5 + ext;
        const allowedType = ['.png','.jpg','.jpeg'];

        if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
        if(fileSize > 5000000) return res.status(422).json({msg: "Images must be less than 5 MB"});

        const filepath = `./public/about/${about.Image}`;
        fs.unlinkSync(filepath);

        file.mv(`./public/about/${fileName}`, (err) =>{
            if(err) return res.status(500).json({msg: err.message});
        })
    }
    const description = req.body.title;
    const url = `${req.protocol}://${req.get("host")}/about/${fileName}`;
    try {
        await About.update({description: description, image: fileName, url: url},{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "About Updated Successfully"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteAbout = async(req, res) =>{
    const about = await About.findOne({
        where:{
            id: req.params.id
        }
    });
    if(!about) return res.status(404).json({msg: "No Data Found"});
    try {
        const filepath = `./public/about/${about.Image}`;
        fs.unlinkSync(filepath);
        await About.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "About Deleted Successfully"});
    } catch (error) {
        console.log(error.message);
    }
}

export const saveAbout = (req, res) =>{
    if(req.files === null) return res.status(400).json({msg: "No File Uploaded"});
    const description = req.body.title;
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.description);
    const fileName = file.md5 + ext;
    const url = `${req.protocol}://${req.get("host")}/about/${fileName}`;
    const allowedType = ['.png','.jpg','.jpeg'];

    if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
    if(fileSize > 5000000) return res.status(422).json({msg: "Images must be less than 5 MB"});

    file.mv(`./public/about/${fileName}`, async(err) =>{
        if(err) return res.status(500).json({msg: err.message});
        try {
            await About.create({description: description, image: fileName, url: url});
            res.status(201).json({msg: "About Created Successfully"});
        } catch (error) {
            console.log(error.message);
        }
    })
}