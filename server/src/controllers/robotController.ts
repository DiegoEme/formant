import { Request, Response } from "express";
import { MyStorage, Robot } from "../models/index.js";

const storage = new MyStorage();

export const list = async (req: Request, res: Response) => {
  try {
    const robots = await storage.list();
    return res.json(robots);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal server error");
  }
};

export const add = async (req: Request, res: Response) => {
  const { name, arms, age, picture } = req.body;

  if (!name || !arms || !age) {
    return res.status(400).send("name, arms and age are required");
  }

  const robot: Robot = {
    name,
    arms,
    age,
    picture,
  };

  try {
    storage.add(robot);
    return res.status(201).json(robot);
  } catch (err) {
    console.error(err);

    return res.status(500).send("Internal server error");
  }
};
