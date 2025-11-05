import dotenv from "dotenv";
import express from "express";
import userRoutes from "./routes/user.js";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 8080;

app.use("/user", userRoutes);

// create a db connection here
// and impliment the connect DB funnction

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
