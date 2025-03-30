/*import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

//testing
// app.get("/", (req, res) => {
//   res.send("api is working");
// });

//database connection
// const connect = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI, {
//       // useNewUrlParser: true,
//       // useUnifiedTopology: true,
//     });
//     console.log("MongoDB database connected");
//   } catch (err) {
//     console.log("MongoDB database connection failed", err);
//   }
// };
/*
//middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.listen(port, () => {
  connect();
  console.log("server listening on port", port);
});
*/
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config();
const PORT = 5555;

import mongoose from "mongoose";
import tourRoute from "./routes/tours.js";
import userRoute from "./routes/user.js";
import authRoute from "./routes/auth.js";
import reviewRoute from "./routes/reviews.js";
import bookingRoute from "./routes/bookings.js";
const app = express();
const corsOptions = {
  origin: true,
  credentials: true,
};
mongoose.set("strictQuery", false);

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome To MERN Stack Tutorial");
});

//middleware
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use("/api/v1/auths", authRoute);
app.use("/api/v1/tours", tourRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/reviews", reviewRoute);
app.use("/api/v1/booking", bookingRoute);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("mongodb error failed", error);
  });
