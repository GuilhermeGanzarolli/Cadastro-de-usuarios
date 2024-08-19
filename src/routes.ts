import { Router } from "express";
import * as userController from "./controller/users-controller"

export const router = Router()


router.get("/users", userController.getUsers)
router.get("/user/:id", userController.getUserById)