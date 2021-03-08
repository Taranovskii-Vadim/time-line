import express from "express";

class UsersController {
  async index(req: express.Request, res: express.Response): Promise<void> {
    try {
      res.status(200).json({
        result: [
          {
            id: "1",
            surname: "тарановский",
            name: "вадим",
            position: "специалист",
            employmentType: "разработчик",
            skills: [
              { value: "react", color: "blue" },
              { value: "nodejs", color: "green" },
            ],
            avatarUrl:
              "https://gorets-media.ru/uploads/images/Hronogor/September/.thumbs/d1850c953d306532caaf5b0dee5a0c19_900_682_1.jpg",
          },
          {
            id: "2",
            surname: "потапов",
            name: "михаил",
            position: "младший специалист",
            employmentType: "дизайнер",
            skills: [{ value: "react", color: "blue" }],
          },
          {
            id: "3",
            surname: "миронов",
            name: "михаил",
            position: "старший специалист",
            employmentType: "разработчик",
            skills: [{ value: "angular", color: "red" }],
          },
        ],
        message: "success",
      });
    } catch (e) {
      res.status(500).json({ message: "error" });
    }
  }
}

export const usersController = new UsersController();
