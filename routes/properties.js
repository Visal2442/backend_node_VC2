import { Router } from "express";
import propertyService from "../services/properties.js";

export default function initRoutes() {
  const router = new Router();
  router.get("/", propertyService.getAll);
  router.post("/", propertyService.create);
  router.get("/:id", propertyService.getPropertyById);
  router.delete("/:id", propertyService.deleteProperty);
  router.put("/:id", propertyService.update);
  return router;
}
