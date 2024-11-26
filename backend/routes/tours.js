import express from "express";
import {
  createTour,
  updateTour,
  deleteTour,
  getSingleTour,
  getAllTour,
  getTourBySearch,
  getFeaturedTour,
  getTourCount,
} from "./../controllers/tourController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();
//create new tour
router.post("/", verifyAdmin, createTour);
//update
router.put("/:id", verifyAdmin, updateTour);
// //delete
router.delete("/:id", verifyAdmin, deleteTour);
// //get single tour
router.get("/:id", getSingleTour);
// //get all tour
router.get("/", getAllTour);
// get tour by search
router.get("/search/getTourBySearch", getTourBySearch);
// get feature tour
router.get("/search/getFeaturedTours", getFeaturedTour);
// get tour Count
router.get("/search/getTourCount", getTourCount);

export default router;
