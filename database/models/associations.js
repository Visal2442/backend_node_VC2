export function defineModelAssociation(appModels) {
  const { User, District, Property, Province, Booking, Wishlist, Rating } = appModels;
  User.hasMany(Property, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  });
  Province.hasMany(District, {
    foreignKey: "province_id",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  });
  District.belongsTo(Province, {
    foreignKey: "province_id",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  });
  District.hasMany(Property, {
    foreignKey: "district_id",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  });
  Property.belongsTo(District, {
    foreignKey: "district_id",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  });
  Property.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  });

  // Many to Many relationship 
  User.belongsToMany(Property, {
    through: Booking,
    foreignKey: "user_id",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  });
  Property.belongsToMany(User, {
    through: Booking,
    foreignKey: "property_id",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  });
  Property.hasMany(Booking,{
    foreignKey: "property_id",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  Booking.belongsTo(User,{
    foreignKey: "user_id",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  Booking.belongsTo(Property,{
    foreignKey: "property_id",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  User.belongsToMany(Property, {
    through: Wishlist,
    foreignKey: "user_id",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  });
  Property.belongsToMany(User, {
    through: Wishlist,
    foreignKey: "property_id",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  });
  Property.hasMany(Wishlist,{
    foreignKey: "property_id",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  User.hasMany(Wishlist,{
    foreignKey: "user_id",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  Wishlist.belongsTo(User,{
    foreignKey: "user_id",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  Wishlist.belongsTo(Property,{
    foreignKey: "property_id",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  Property.hasMany(Rating,{
    foreignKey: "property_id",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  User.hasMany(Rating,{
    foreignKey: "user_id",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  Rating.belongsTo(User,{
    foreignKey: "user_id",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  Rating.belongsTo(Property,{
    foreignKey: "property_id",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
}
