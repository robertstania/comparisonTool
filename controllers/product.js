const knex = require("../db/knex.js");

module.exports = {

  viewAll: function(req, res){
    knex("product")
      .select("product.*", "store.name AS store_name")
      .join("store", "product.store_id", "store.id")
      .then((result)=>{
        console.log(result);

        res.render("index", {products: result, comparisonList: req.session.compare});
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

  addCompare: function(req, res){
    knex("product")
      .where("id", req.params.id)
      .then((product)=>{
        if(req.session.compare.length == 2){
          req.session.compare.shift();
        }
        req.session.compare.push(product[0]);
        req.session.save(()=>{
          res.redirect('/');
        })

      })
  },

  removeCompare: function(req, res){
    req.session.compare = req.session.compare.filter(item => item.id!=req.params.id);

    res.redirect("/")
  },

  showComparison: function(req, res){

    res.render("compare", {product1: req.session.compare[0], product2: req.session.compare[1]});
  }
}
