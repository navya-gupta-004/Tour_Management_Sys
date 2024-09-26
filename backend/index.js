/*import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;
const mongoose = configure("mongoose");

//testing
// app.get("/", (req, res) => {
//   res.send("api is working");
// });

//database connection
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB database connected");
  } catch (err) {
    console.log("MongoDB database connection failed", err);
  }
};
//middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.listen(port, () => {
  connect();
  console.log("server listening on port", port);
});*/

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const PORT = 5555;
import mongoose from "mongoose";
import tourRoute from "./routes/tours.js";

const app = express();
mongoose.set("strictQuery", false);

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome To MERN Stack Tutorial");
});

//middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use("/tours", tourRoute);

mongoose
  .connect("mongodb://127.0.0.1:27017/Booking")
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("mongodb error failed", error);
  });
