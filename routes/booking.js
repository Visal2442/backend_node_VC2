import { Router } from "express";
import { getAll, create } from "../services/bookings.js";

export default function initRoutes() {
  const router = Router();
  router.get("/", getAll);
  router.post("/", create);
  return router;
}
