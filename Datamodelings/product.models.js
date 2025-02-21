import mongoose  from "mongoose";

const produnstSchema = mongoose.Schema({
    description:{
        required: true,
        type: String,

    },

    name:{
        require:true,
        type:String
    },

    productImage:{
        type:String
    },

    price:{
        type:Number,
        default: 0
    },

    stock:{
        default: 0,
        type:Number
    },
     category:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"categoty",
        required: true,
     },

     owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
     }
} , {timestamps: true})

export const produnstManeger = mongoose.model( "produnstManeger" , produnstSchema)