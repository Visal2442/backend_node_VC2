
module.exports = {
  async up(queryInterface, Sequelize) {
    const { propertySchema } = await import("../models/properties.js");
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.createTable(
        "properties",
        {
          ...propertySchema,
        },
        {
          transaction,
        }
      );

      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },

  async down(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.dropTable("properties");
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },
};
