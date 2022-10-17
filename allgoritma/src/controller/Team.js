import Team from "../models/Team.js";
import path from "path";
import fs from "fs";

export const getTeam = async(req, res) =>{
    try {
        const response = await Team.findAll();
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getTeamById = async(req, res) =>{
    try {
        const response = await Team.findOne({
            where:{
                id: req.params.id
            }
        });
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const updateTeam = async(req, res) =>{
    const team = await Team.findOne({
        where:{
            id: req.params.id
        }
    });
    if(!team) return res.status(404).json({msg: "No Data Found"});
    let fileName = "";
    if(req.files === null){
        fileName = Team.image;
    }else{
        const file = req.files.file;
        const fileSize = file.data.length;
        const ext = path.extname(file.name);
        fileName = file.md5 + ext;
        const allowedType = ['.png','.jpg','.jpeg'];

        if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
        if(fileSize > 5000000) return res.status(422).json({msg: "Images must be less than 5 MB"});

        const filepath = `./public/images/${team.Image}`;
        fs.unlinkSync(filepath);

        file.mv(`./public/images/${fileName}`, (err) =>{
            if(err) return res.status(500).json({msg: err.message});
        })
    }
    const name = req.body.title;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    try {
        await Team.update({name: name, tanggal_lahir: tanggal_lahir, jabatan: jabatan, image: fileName, url: url},{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Team Updated Successfully"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteTeam = async(req, res) =>{
    const team = await Team.findOne({
        where:{
            id: req.params.id
        }
    });
    if(!team) return res.status(404).json({msg: "No Data Found"});
    try {
        const filepath = `./public/images/${team.Image}`;
        fs.unlinkSync(filepath);
        await Team.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Team Deleted Successfully"});
    } catch (error) {
        console.log(error.message);
    }
}

export const saveTeam = (req, res) =>{
    if(req.files === null) return res.status(400).json({msg: "No File Uploaded"});
    const name = req.body.title;
    const tanggal_lahir = req.body.tanggal_lahir;
    const jabatan = req.body.jabatan;
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const fileName = file.md5 + ext;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    const allowedType = ['.png','.jpg','.jpeg'];

    if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
    if(fileSize > 5000000) return res.status(422).json({msg: "Images must be less than 5 MB"});

    file.mv(`./public/images/${fileName}`, async(err) =>{
        if(err) return res.status(500).json({msg: err.message});
        try {
            await Team.create({name: name, tanggal_lahir: tanggal_lahir, jabatan: jabatan, image: fileName, url: url});
            res.status(201).json({msg: "Team Created Successfully"});
        } catch (error) {
            console.log(error.message);
        }
    })
}