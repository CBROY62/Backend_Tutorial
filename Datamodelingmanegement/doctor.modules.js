import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    salary: {
      type: String,
      required: true,
    },

    qualification: {
      type: String,
      required: true,
    },

    naexperienceINyear: {
      type: Number,
      default: 0,
    },

    workInhospital: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "hospitala",
      },
    ],
  },
  { timestamps: true }
);

export const doctor = mongoose.model("doctor", doctorSchema);
