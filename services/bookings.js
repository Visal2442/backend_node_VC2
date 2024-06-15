
import models from "../database/models/index.js";

const { Property, User, Booking } = models;

export async function getAll(req, res) {
  try {
    const bookings = await Booking.findAll({
      include: [
        {
          model: Property,
        },
        {
          model: User,
        },
      ],
    });
    res.send(bookings);
  } catch (err) {
    res.send(err);
  }
}
export async function create(req, res) {
  const booking = req.body;
  try {
    const newBooking = await Booking.create(booking);
    res.send(201);
    res.send({ data: newBooking, message: "Property is created" });
  } catch (err) {
    res.status(400);
    res.send(err);
  }
}
