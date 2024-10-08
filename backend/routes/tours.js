import express from "express";
import {
  createTour,
  updateTour,
  deleteTour,
  getSingleTour,
  getAllTour,
} from "./../controllers/tourController.js";
const router = express.Router();
//create new tour
router.post("/", createTour);
//update
router.put("/:id", updateTour);
// //delete
router.delete("/:id", deleteTour);
// //get single tour
router.get("/:id", getSingleTour);
// //get all tour
router.get("/", getAllTour);

export default router;
