import mongoose from "mongoose";

const Schemahospitala = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },

    address: {
      type: String,
      require: true,
    },

    city: {
      type: String,
      require: true,
    },

    pincode: {
      type: String,
      require: true,
    },

    specializetion: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

export const hospitala = mongoose.model("hospitala", Schemahospitala);
