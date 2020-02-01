
exports.up = function(knex) {
  return knex.schema.createTable("cars",tbl => {
      tbl.increments();
      tbl.text("car", 128)
      .unique()
      .notNullable();
      tbl.integer("Year");
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExist("cars");
};
