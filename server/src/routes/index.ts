import express from "express";
import apiRouterRobot from "./api/robot.js";
const router = express.Router();

router.use("/robot", apiRouterRobot);

export default router;
