import { addDays, getDate, getMonth, getYear } from "date-fns";
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
        surname: "минин",
        name: "роман",
        position: "руководитель группы развития",
        employmentType: "менеджер",
        skills: [{ label: "javascript", value: "gold" }],
        projects: [
          {
            id: uuidv4(),
            title: "личный кабинет сотрудника",
            color: "#13AA52",
            description:
              "loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem",
            stack: [
              { label: "react", value: "blue" },
              { label: "typescript", value: "geekblue" },
            ],
            team: [
              {
                fullname: "тарановский вадим",
                email: "vgtaranovsky@greenatom.ru",
                role: "разработчик",
              },
              {
                fullname: "данилин арсений",
                email: "vgtaranovsky@greenatom.ru",
                role: "аналитик",
              },
              {
                fullname: "логачев кирилл",
                email: "vgtaranovsky@greenatom.ru",
                role: "разработчик",
              },
              {
                fullname: "минин роман",
                email: "vgtaranovsky@greenatom.ru",
                role: "менеджер проекта",
              },
            ],
            period: {
              from: new Date(getYear(new Date()), 0, 1),
              to: new Date(getYear(new Date()) + 1, 0, 1),
            },
            tasks: [],
          },
          {
            id: uuidv4(),
            title: "опрос человек года",
            color: "#006CBC",
            description:
              "loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem",
            stack: [
              { label: "react", value: "blue" },
              { label: "typescript", value: "geekblue" },
              { label: "redux", value: "purple" },
            ],
            team: [
              {
                fullname: "тарановский вадим",
                email: "vgtaranovsky@greenatom.ru",
                role: "разработчик",
              },
              {
                fullname: "михайлова елизавета",
                email: "vgtaranovsky@greenatom.ru",
                role: "дизайнер",
              },
              {
                fullname: "лаптев дмитрий",
                email: "vgtaranovsky@greenatom.ru",
                role: "верстальщик",
              },
              {
                fullname: "минин роман",
                email: "vgtaranovsky@greenatom.ru",
                role: "менеджер проекта",
              },
            ],
            period: {
              from: new Date(getYear(new Date()), getMonth(new Date()), 5),
              to: new Date(getYear(new Date()), getMonth(new Date()) + 1, 15),
            },
            tasks: [],
          },
        ],
      });
      // await user.save();
      res.status(201).json({ result: user, message: "success" });
    } catch (e) {
      console.log(e);
    }
  }
}

export const usersController = new UsersController();
