import { where } from "sequelize";
import models from "../database/models/index.js";
import database from "../boot/db.js";

const { Product, ProductImage } = models;

export async function getAll(req, res) {
  try {
    const products = await Product.findAll({
      include: [{ model: ProductImage }],
    });
    res.send(products);
  } catch (err) {
    res.send(err);
  }
}

export async function getById(req, res) {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    res.send(product);
  } catch (err) {
    res.send(err);
  }
}

export async function destroy(req, res) {
  const transaction = await database.core.transaction();
  try {
    const { id } = req.params;
    const product = await Product.destroy({
      where: { id },
      transaction,
    });
    await transaction.commit();
    res.send(product);
  } catch (err) {
    await transaction.rollback();
    res.send(err);
  }
}
