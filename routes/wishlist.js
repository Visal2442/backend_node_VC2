import { Router } from "express";
import wishlistServices from '../services/wishlists.js'
export default function initRoutes() {
  const router = new Router();
  router.get("/:userId",wishlistServices.getWishlistByUserId )
  router.post("/", wishlistServices.create)
  router.delete("/:id", wishlistServices.deleteWishlist)
  return router
}
