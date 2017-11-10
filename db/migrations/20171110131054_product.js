
exports.up = function(knex, Promise) {
  return knex.schema.createTable('product', (table)=>{
    table.increments();
    table.string("name");
    table.integer('store_id')
      .references("id")
      .inTable("store")
      .notNullable()
      .onDelete("CASCADE")
      .index();
    table.text("description");
    table.decimal("price");
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('product');
};
