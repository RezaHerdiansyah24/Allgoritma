import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-Parser";
import cors from "cors";
import db from "./src/config/Database.js";
import router from "./src/routes/index.js";
import contactusrouter from "./src/routes/contactus.js";
import aboutrouter from "./src/routes/about.js";
import featuresrouter from "./src/routes/features.js";
import teamrouter from "./src/routes/team.js";
import FileUpload from "express-fileupload";
dotenv.config();
const app = express();

try {
    await db.authenticate();
    console.log('Database connected...');
} catch (error) {
    console.error(error);
}

app.use(cors({ credentials:true, origin:'http://localhost:3000' }));
app.use(cookieParser());
app.use(express.json());
app.use(FileUpload());
app.use(router);
app.use(contactusrouter);
app.use(aboutrouter);
app.use(featuresrouter);
app.use(express.static("public"));
app.use(teamrouter);

app.listen(5000, ()=> console.log('Server running at port 5000'));