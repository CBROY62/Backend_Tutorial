import mongoose from "mongoose"


const categorySchema = new mongoose.Schema({
    name:{
        type: String,
        require:true,
    },
} , { timestamps: true})


export const categoty = mongoose.model("categoty" , categorySchema )