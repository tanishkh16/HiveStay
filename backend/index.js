import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import signup from "./routes/auth.router.js"
import login from "./routes/auth.router.js"
import addSuggestions from './routes/user.router.js'
import addComplaints from './routes/user.router.js'
import holidaysApplication from './routes/user.router.js'
import user from './routes/user.router.js'
import roomMaintance from "./routes/user.router.js"
 dotenv.config();

const app = express();
const port = 3000;
app.use(express.static('public'));
app.use(express.json()); // Parse JSON requests
app.use(express.urlencoded({ extended: true }));

app.use("/api",signup);
app.use("/api",login)
app.use("/api",user)
app.use("/api",addSuggestions)
app.use("/api",addComplaints)
app.use('/api',holidaysApplication)
app.use('/api',roomMaintance)

app.use(express.json()); // Parse JSON requests
app.use(express.urlencoded({ extended: true }));
mongoose.connect('mongodb://localhost:27017/tanish', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1); // Exit the process if there's a connection error
  });
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
