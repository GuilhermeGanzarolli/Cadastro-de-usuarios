import { Router } from "express";
import * as userController from "./controller/users-controller"

export const router = Router()


router.get("/users", userController.getUsers)
router.get("/user/:id", userController.getUserById)
router.post("/user", userController.createUser)
router.patch("/user/:id", userController.updataUserById)
router.delete("/user/:id", userController.delteUserById)