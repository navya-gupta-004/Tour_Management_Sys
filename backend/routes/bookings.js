import express from "express";
import {
  createBooking,
  getAllBooking,
  getBooking,
} from "../controllers/bookingController.js";
// import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();
router.post("/", createBooking);
router.get("/:id", getBooking);
router.get("/", getAllBooking);
export default router;
