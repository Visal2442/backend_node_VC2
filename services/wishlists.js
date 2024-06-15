import models from "../database/models/index.js";
const { Property, User, Wishlist } = models;

async function create(req, res) {
  const wishlist = req.body;
  try {
    const wishlistIsExist = await Wishlist.findOne({
      where: {
        user_id: wishlist.user_id,
        property_id: wishlist.property_id,
      },
    });
    if (wishlistIsExist) {
      res.send({ message: "You've already added this item !" });
      return;
    }
    const newWishlist = await Wishlist.create(wishlist);
    res.send({ data: newWishlist, message: "Property is created" });
  } catch (err) {
    res.send(err.errors[0].message);
  }
}
async function getWishlistByUserId(req, res) {
  const wishlist = await Wishlist.findOne({
    where: {
      user_id: req.params.userId,
    },
  });
  if (!wishlist) {
    res.status(404);
    res.send({ message: "Not Found !" });
    return;
  }
  res.send(wishlist);
}
async function deleteWishlist(req, res) {
  await Wishlist.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.send("delete success !");
}

export default {
  getWishlistByUserId,
  create,
  deleteWishlist,
};
