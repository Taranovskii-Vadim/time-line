import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";

// Routes

import { usersRouter } from "./routes/users";

const app = express();

app.use(express.json());

app.use("/users", usersRouter);

const PORT = process.env.PORT || 3001;

async function start() {
  try {
    mongoose.connect(
      "mongodb+srv://vadim:ixNc78d9IOVTozFv@cluster0.caj7o.mongodb.net/myDB?retryWrites=true&w=majority",
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    );
    app.listen(PORT, () => {
      console.log(`server is running on port : ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
}

start();
