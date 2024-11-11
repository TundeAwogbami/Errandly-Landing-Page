import mongoose from "mongoose";

const waitingListSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    // position: {
    //   type: Number,
    //   required: true,
    //   default: 1,
    // },
    addedAt: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: String,
      enum: ["waiting", "notified", "served"],
      default: "waiting",
    },
    notificationDate: {
      type: Date,
    },
    joinedAt: {
      type: Date,
      default: Date.now, // Date when the user joined the waiting list
    },
  },
  { timestamps: true }
);

// Ensure that the email field is unique across the waiting list
waitingListSchema.index({ email: 1 }, { unique: true });

const WaitingList = mongoose.model("WaitingList", waitingListSchema);

export default WaitingList;
