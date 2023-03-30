import express from "express";

import { add, list } from "../../controllers/robotController.js";

const apiRouterRobot = express.Router();

apiRouterRobot.get("/list", list);
apiRouterRobot.post("/add", add);

export default apiRouterRobot;
