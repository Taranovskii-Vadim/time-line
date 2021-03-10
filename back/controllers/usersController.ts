import express from "express";

class UsersController {
  async index(req: express.Request, res: express.Response): Promise<void> {
    try {
      const response = {
        result: [
          {
            id: "1",
            surname: "тарановский",
            name: "вадим",
            position: "специалист",
            employmentType: "разработчик",
            skills: [
              { label: "react", value: "blue" },
              { label: "nodejs", value: "green" },
              { label: "typescript", value: "geekblue" },
            ],
            avatarUrl:
              "https://gorets-media.ru/uploads/images/Hronogor/September/.thumbs/d1850c953d306532caaf5b0dee5a0c19_900_682_1.jpg",
            projects: [
              {
                title: "Личный кабинет работника",
                tasks: [
                  {
                    taskType: "task",
                    from: new Date(Date.now() + 1000 * 60 * 60 * 24 * 10),
                    to: new Date(Date.now() + 1000 * 60 * 120 * 24 * 10),
                  },
                  {
                    taskType: "bug",
                    from: new Date(),
                    to: new Date(Date.now() + 100 * 60 * 60 * 24 * 10),
                  },
                ],
              },
            ],
          },
          {
            id: "2",
            surname: "потапов",
            name: "михаил",
            position: "младший специалист",
            employmentType: "дизайнер",
            skills: [{ label: "react", value: "blue" }],
            projects: [
              {
                title: "Опросы",
                tasks: [
                  {
                    taskType: "story",
                    from: new Date(),
                    to: new Date(Date.now() + 1000 * 60 * 60 * 18 * 14),
                  },
                ],
              },
            ],
          },
          {
            id: "3",
            surname: "миронов",
            name: "михаил",
            position: "старший специалист",
            employmentType: "разработчик",
            skills: [{ label: "angular", value: "red" }],
            projects: [
              {
                title: "Мой голос",
                tasks: [
                  {
                    taskType: "feature",
                    from: new Date(),
                    to: new Date(Date.now() + 100 * 60 * 60 * 24 * 10),
                  },
                ],
              },
            ],
          },
          {
            id: "4",
            surname: "тестов",
            name: "тест",
            position: "старший тест",
            employmentType: "разработчик",
            skills: [{ label: "typescript", value: "geekblue" }],
            projects: [
              {
                title: "Мой test",
                tasks: [
                  {
                    taskType: "task",
                    from: new Date(Date.now() + 100 * 60 * 60 * 24 * 10),
                    to: new Date(Date.now() + 200 * 60 * 60 * 24 * 10),
                  },
                ],
              },
            ],
          },
        ],
        message: "success",
      };

      res.status(200).json(response);
    } catch (e) {
      res.status(500).json({ message: "error" });
    }
  }
}

export const usersController = new UsersController();
