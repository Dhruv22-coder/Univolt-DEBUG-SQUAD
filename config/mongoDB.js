import mongoose from "mongoose";

const connectMongoDB = async () => {
  console.log("➡️ mongoDB.js file reached");

  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.log("❌ MongoDB connection failed");
    console.log(error.message);
  }
};

export default connectMongoDB;
