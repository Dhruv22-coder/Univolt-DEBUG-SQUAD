
import dotenv from "dotenv";
dotenv.config();

import express from 'express';
import connectDB from './config/mongoDB.js';

const startServer = async () => {
  try {
 connectDB();

const app = express();
const PORT = process.env.PORT || 3000;
app.listen(PORT);

app.get('/', (req, res) => {
  res.send('Welcome to Univault!');
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }};
  startServer();