import mongoose from "mongoose";

export const shapeIntoMongooseObjectId = (target) => {
  if (typeof target === "string") {
    return new mongoose.Types.ObjectId(target);
  } else {
    return target;
  }
};
