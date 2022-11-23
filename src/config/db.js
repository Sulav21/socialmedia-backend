import mongoose from "mongoose";

export const dbConnection = () => {
  try {
    const dbConn = mongoose.connect(process.env.MONGO_CLIENT);
    dbConn && console.log("MongoDB connection successful");
  } catch (error) {
    console.log(error.message);
  }
};
