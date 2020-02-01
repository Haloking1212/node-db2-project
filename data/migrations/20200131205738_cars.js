
exports.up = function(knex) {
    return knex.schema.createTable("cars",tbl => {
        tbl.increments();
        tbl.text("car", 128)
        .notNullable();
        tbl.integer("Year")
        .notNullable();
        tbl.integer("Vin")
        .notNullable()
        .unique()
        tbl.text("Make")
        .notNullable()
        tbl.integer("Mileage")
        .notNullable();
        tbl.text("Transmission Type")
        tbl.text("Title Status")
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists("cars");
  };