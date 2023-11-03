import { Router } from "express";
import ratingServices from '../services/ratings.js'
export default function initRoutes() {
  const router = new Router();
  router.get("/:propertyId",ratingServices.getRatingByPropertyId )
  router.post("/", ratingServices.create)
  return router
}
