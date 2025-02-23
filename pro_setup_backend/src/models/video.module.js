import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
  {
    videoFile:{
        type:String , // cloudnery url
        require:true
    },

    thumbnal:{
        type:String, // cloudnery url
        required:true
    },
    title:{
        type:String,
        required:true
    },

    discription:{
        type:String, 
        required:true
    },

    duration:{
        type:Number, // cloudnery url
        required:true,
    },
    views:{
        type:Number, // cloudnery url
        default:0,
    },

    isPublished:{
        type:Boolean,
        default:true,
    },
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },

  },

  {
    timeseries: true,
  }
)
videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video", videoSchema);
