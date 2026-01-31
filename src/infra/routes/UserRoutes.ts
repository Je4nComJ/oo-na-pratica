import { Router } from "express";

export function createUserRoutes(): Router {
  const router = Router();

  router.get("/", (req, res) => {
    res.json({ message: "users..." });
  });
  router.post("/", (req, res) => {
    res.json({ message: "create user..." });
  });
  router.get("/:id", (req, res) => {
    res.json({ message: `get user with id ${req.params.id}...` });
  });
  router.get("/:email", (req, res) => {
    res.json({ message: `get user with email ${req.params.email}...` });
  });
  router.put("/:id", (req, res) => {
    res.json({ message: `update user with id ${req.params.id}...` });
  });
  router.delete("/:id", (req, res) => {
    res.json({ message: `delete user with id ${req.params.id}...` });
  });

  return router;
}