import { UserController } from './../controllers/UserController';
import { Router } from "express";

export function createUserRoutes(): Router {
  const router = Router();

  const userController = new UserController();

  router.get("/", (req, res) => {
    userController.getAllUsers(req, res);
  });
  router.post("/", (req, res) => {
    userController.createUser(req, res);
  });
  router.get("/:id", (req, res) => {
    userController.getUserById(req, res);
  });
  router.get("/email/:email", (req, res) => {
    userController.getUserByEmail(req, res);
  });
  router.put("/:id", (req, res) => {
    userController.updateUser(req, res);
  });
  router.delete("/:id", (req, res) => {
    userController.deleteUser(req, res);
  });

  return router;
}