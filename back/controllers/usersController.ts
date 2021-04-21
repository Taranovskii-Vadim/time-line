import { getMonth, getYear } from "date-fns";
import express from "express";
import { v4 as uuidv4 } from "uuid";

import { userModel } from "../models/usersModel";

class UsersController {
  async index(req: express.Request, res: express.Response): Promise<void> {
    try {
      const users = await userModel.find();
      res.status(200).json({
        result: users,
        message: "success",
      });
    } catch (e) {
      console.log(e);
      res.status(500).json({ message: "error" });
    }
  }
  async add(req: express.Request, res: express.Response): Promise<void> {
    try {
      const user = new userModel();
      // await user.save();
      res.status(201).json({ result: user, message: "success" });
    } catch (e) {
      console.log(e);
    }
  }
}

export const usersController = new UsersController();
