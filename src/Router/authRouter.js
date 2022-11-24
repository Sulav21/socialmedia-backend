import express from "express";
import { insertUser } from "../models/user/UserModel.js";

const router = express.Router();

router.post("/register", async (req, res, next) => {
  try {
    const result = await insertUser(req.body);
    result?._id
      ? res.status(200).json({ status: "success", message: "User added successfully",result })
      : res.json({ status: "error", message: "error occured!" });
  } catch (error) {
    next(error);
  }
});

export default router;
