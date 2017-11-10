const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  createProductForm: function(req, res) {
    knex('store')
      .then((results)=>{

        res.render("createProduct", {stores: results});
      })
  },

  create: function(req, res) {
    knex("product")
      .insert({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        store_id: req.body.store_id
      })
      .then(()=>{
        res.redirect("/");
      })
  },
}
