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
      const user = new userModel({
        surname: "гоголь",
        name: "николай",
        position: "писатель",
        employmentType: "драматург",
        avatarUrl:
          "https://ds04.infourok.ru/uploads/ex/1252/001163e9-8935a206/hello_html_m5c1e10bc.jpg",
        skills: [
          { label: "react", value: "blue" },
          { label: "nodejs", value: "green" },
          { label: "typescript", value: "geekblue" },
        ],
        projects: [
          {
            id: uuidv4(),
            title: "мертвые души: первый том",
            period: {
              from: new Date(Date.now() + 1000 * 60 * 60 * 24 * 10),
              to: new Date(Date.now() + 10000 * 70 * 80 * 123 * 10),
            },
            tasks: [
              {
                id: uuidv4(),
                type: "task",
                title: "написать первую главу",
                from: new Date(Date.now() + 1000 * 60 * 60 * 24 * 10),
                hours: 147,
              },
              {
                id: uuidv4(),
                type: "bug",
                title: "исправить ошибки в первой главе",
                from: new Date(Date.now() + 2100 * 80 * 80 * 24 * 10),
                hours: 48,
              },
            ],
          },
          {
            id: uuidv4(),
            title: "мертвые души: второй том",
            period: {
              from: new Date(Date.now() + 1000 * 60 * 60 * 24 * 10),
              to: new Date(Date.now() + 10000 * 70 * 80 * 123 * 10),
            },
            tasks: [
              {
                id: uuidv4(),
                type: "story",
                title: "написать первую главу",
                from: new Date(Date.now() + 1000 * 60 * 60 * 24 * 10),
                hours: 147,
              },
              {
                id: uuidv4(),
                type: "bug",
                title: "исправить ошибки в первой главе",
                from: new Date(Date.now() + 2100 * 80 * 80 * 24 * 10),
                hours: 48,
              },
            ],
          },
          {
            id: uuidv4(),
            title: "мертвые души: третий том",
            period: {
              from: new Date(Date.now() + 1000 * 60 * 60 * 24 * 10),
              to: new Date(Date.now() + 10000 * 70 * 80 * 123 * 10),
            },
            tasks: [
              {
                id: uuidv4(),
                type: "story",
                title: "написать первую главу",
                from: new Date(Date.now() + 1000 * 60 * 60 * 24 * 10),
                hours: 147,
              },
              {
                id: uuidv4(),
                type: "feature",
                title: "исправить ошибки в первой главе",
                from: new Date(Date.now() + 2100 * 80 * 80 * 24 * 10),
                hours: 48,
              },
            ],
          },
        ],
      });
      await user.save();
      res.status(201).json({ result: user, message: "success" });
    } catch (e) {
      console.log(e);
    }
  }
}

export const usersController = new UsersController();
