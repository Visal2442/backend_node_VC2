
import models from "../database/models/index.js";

const { Rating } = models;

async function create(req, res) {
  const rating = req.body;
  try {
    const isRated = await Rating.findOne({
      where: {
        user_id: rating.user_id,
        property_id: rating.property_id,
      },
    });
    if (isRated) {
      Rating.update(
        { star: rating.star },
        {
          where: {
            user_id: rating.user_id,
            property_id: rating.property_id,
          },
        }
      );
    } else {
      await Rating.create(rating);
    }
    res.send({ message: "You rate on the property" });
  } catch (err) {
    res.send(err.errors[0].message);
  }
}
async function getRatingByPropertyId(req, res) {
  const rating = await Rating.findAll({
    where: {
      property_id: req.params.propertyId,
    },
    attributes: ["star"],
  });
  if (rating.length <= 0) {
    res.status(404);
    res.send({ message: `The property has no rating !` });
    return;
  }
  res.send(rating);
}

export default {
  create,
  getRatingByPropertyId,
};
