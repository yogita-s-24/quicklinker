import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

const connectionDB = async() => {
  const conn = await mongoose.connect(process.env.MONGODB_URI);
  if(conn){
    console.log("MongoDB Connected Successfully.");
  }
};
connectionDB();

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
