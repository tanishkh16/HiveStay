import express from "express";
import mongoose, { get } from "mongoose";
import dotenv from 'dotenv';
import signup from "./routes/auth.router.js"
import login from "./routes/auth.router.js"
import addSuggestions from './routes/user.router.js'
import addComplaints from './routes/user.router.js'
import holidaysApplication from './routes/user.router.js'
import user from './routes/user.router.js'
import roomMaintance from "./routes/user.router.js"
import logout from "./routes/auth.router.js"
import post from "./routes/post.router.js"
import getPosts from "./routes/post.router.js"
import  holidaysApplicationStatus from "./routes/warden.router.js"
import getHolidaysApplication from "./routes/warden.router.js"
import holidayApplicationResponse from "./routes/user.router.js"
import getmessComplaints from "./routes/warden.router.js"
 
 dotenv.config();

const app = express();
const port = 3000;
app.use(express.static('public'));
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use("/api",signup);
app.use("/api",login)
app.use("/api",user)
app.use("/api",addSuggestions)
app.use("/api",addComplaints)
app.use('/api',holidaysApplication)
app.use('/api',roomMaintance)
app.use("/api",logout);
app.use("/api",post);
app.use("/api",getPosts);
app.use("/api",holidaysApplicationStatus)
app.use("/api",getHolidaysApplication)
app.use("/api",holidayApplicationResponse)
app.use("/api",getmessComplaints)


app.use(express.json()); // Parse JSON requests
app.use(express.urlencoded({ extended: true }));
mongoose.connect('mongodb+srv://hivestay:hivestay@cluster0.rnut6pb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
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
