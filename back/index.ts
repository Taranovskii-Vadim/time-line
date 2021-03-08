import dotenv from "dotenv";
dotenv.config();
import express from "express";

// Routes

import { usersRouter } from "./routes/users";

const app = express();

app.use("/users", usersRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`server is running on port : ${PORT}`);
});
