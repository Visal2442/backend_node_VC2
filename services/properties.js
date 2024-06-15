import models from "../database/models/index.js";
const { Property, User, District } = models;

async function getAll(req, res) {
  const properties = await Property.findAll({
    include: [
      {
        model: User,
      },
      {
        model: District,
      },
    ],
  });
  res.send(properties);
}
async function create(req, res) {
  const property = req.body;
  try {
    const newProperty = {
      price: property.price,
      name: property.name,
      description: property.description,
      type: property.type,
      size: property.size,
      number_of_floor: property.number_of_floor,
      number_of_room: property.number_of_room,
      number_of_bathroom: property.number_of_bathroom,
      number_of_kitchen: property.number_of_kitchen,
      image: property.image,
      latitude: property.latitude,
      longitude: property.longitude,
      district_id: property.district_id,
      user_id: property.user_id,
      available: property.available,
    };
    const newProp = await Property.create(newProperty);
    res.send({ data: newProp, message: "Property is created" });
  } catch (err) {
    res.send(err.errors[0].message);
  }
}
async function getPropertyById(req, res) {
  const property = await Property.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!property) {
    res.status(404);
    res.send();
    return;
  }
  res.send(property);
}
async function deleteProperty(req, res) {
  await Property.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.send("delete success !");
}
async function update(req, res) {
  const property = await Property.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!property) {
    res.status(404);
    res.send();
    return;
  }
  await property.update(req.body);
  res.send("Property is updated.");
}

export default {
  getAll,
  getPropertyById,
  create,
  deleteProperty,
  update,
};
