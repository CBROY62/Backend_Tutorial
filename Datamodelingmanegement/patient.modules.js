import mongoose from "mongoose";


const  patientSchema = new mongoose.Schema({
   name:{
    type:String,
    required: true
   },

   diagonsewith:{
    type:String,
    required:true
   },
   address:{
    type:String,
    required:true
   },
   age:{
    type:Number,
    required:true
   },
   bloodGroup:{
    type:String,
    required:true
   },
   gender:{
    type:String,
    enum:["M" , "F" , "O"],
    required:true,
   },

   admitedIn:{
    type:mongoose.Schema.Types.ObjectId,
    ref: "hospitala"
   }

} , {timestamps:true})


export const  patient = mongoose.model("patient" , patientSchema)