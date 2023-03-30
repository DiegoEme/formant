import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { Robot, storage } from "../models/index.js";

export const list = async (req: Request, res: Response) => {
  try {
    const robots = storage;
    return res.json(robots);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal server error");
  }
};

export const add = async (req: Request, res: Response) => {
  const { name, number_of_arms } = req.body;

  if (!name || !number_of_arms) {
    return res.status(400).send("Name and number_of_arms are required");
  }

  const robot: Robot = { name, number_of_arms, id: uuidv4() };

  try {
    storage.push(robot);
    return res.status(201).json(robot);
  } catch (err) {
    console.error(err);

    return res.status(500).send("Internal server error");
  }
};
