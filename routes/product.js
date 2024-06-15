import { Router } from "express";
import { getAll, destroy, getById } from "../services/product.js";

export default function initRoutes() {
  const router = Router();
  router.get("/", getAll);
  router.get("/:id", getById);
  router.delete("/:id", destroy);
  return router;
}
