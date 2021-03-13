import { Router } from "express";

import { usersController } from "../controllers/usersController";

const router = Router();

router.get("/", usersController.index);

router.post("/", usersController.add);

export { router as usersRouter };
