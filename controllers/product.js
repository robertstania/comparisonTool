const knex = require("../db/knex.js");

module.exports = {

  viewAll: function(req, res){
    knex("product")
      .select("product.*", "store.name AS store_name")
      .join("store", "product.store_id", "store.id")
      .then((result)=>{
        console.log(result);
        res.render("index", {products: result});
      })
  },

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
