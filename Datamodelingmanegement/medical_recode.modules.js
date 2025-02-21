import mongoose from "mongoose";


const  medical_recodeSchema = new mongoose.Schema({} , {timestamps:true})


export const  medical_recode = mongoose.model("medical_recode" , medical_recodeSchema)