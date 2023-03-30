import { v4 as uuidv4 } from "uuid";

export interface Robot {
  name?: string;
  age?: string;
  arms?: string;
  picture?: string;
}
export interface Storage {
  add(robot: Robot): Promise<Robot>;
  list(): Promise<Robot[]>;
}

// Define an in-memory storage layer
export class MyStorage implements Storage {
  private robots: Robot[] = [];
  private id = uuidv4();

  async add(robot: Robot): Promise<Robot> {
    const newRobot = { ...robot, id: this.id };
    this.robots.push(newRobot);
    return newRobot;
  }

  async list(): Promise<Robot[]> {
    return this.robots;
  }
}
