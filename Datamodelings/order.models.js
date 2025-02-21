import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "product",
  },

  quantity: {
    type: Number,
    require: true,
  },
});

const oderSchema = new mongoose.Schema(
  {
    orderPrice: {
      type: Number,
      require: true,
    },

    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
    },

    orderItems: {
      type: [orderItemSchema],
    },

    Address: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: ["PENDING", "CANCELLED", "DELIVERED"],
      default: "PENDING",
    },
  },
  { timestamps: true }
);

export const order = mongoose.model("order", oderSchema);
