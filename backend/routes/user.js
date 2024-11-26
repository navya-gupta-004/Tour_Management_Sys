import express from "express";
import {
  updateUser,
  deleteUser,
  getSingleUser,
  getAllUser,
} from "./../controllers/userController.js";
const router = express.Router();
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

//update
router.put("/:id", verifyUser, updateUser);
// //delete
router.delete("/:id", verifyUser, deleteUser);
// //get single User
router.get("/:id", verifyUser, getSingleUser);
// //get all User
router.get("/", verifyAdmin, getAllUser);
export default router;
