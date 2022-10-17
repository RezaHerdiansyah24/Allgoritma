import express from "express";
import { 
    getContactUs,
    getContactUsById,
    createContactUs,
    updateContactUs,
    deleteContactUs
 } from "../controller/ContactUs.js";

const contactusrouter = express.Router();

contactusrouter.get('/contactus', getContactUs);
contactusrouter.get('/contactus/:id', getContactUsById);
contactusrouter.post('/contactus', createContactUs);
contactusrouter.patch('/contactus/:id', updateContactUs);
contactusrouter.delete('/contactus/:id', deleteContactUs);

export default contactusrouter;