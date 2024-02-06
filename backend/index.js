import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import signup from "./routes/auth.router.js"
 dotenv.config();

const app = express();
const port = 3000;
app.use(express.static('public'));
app.use(express.json()); // Parse JSON requests
app.use(express.urlencoded({ extended: true }));

app.use("/api",signup);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
