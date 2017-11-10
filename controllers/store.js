const knex = require("../db/knex.js");

module.exports = {
  createStoreForm: function(req, res) {
    res.render("createStore");
  },

  create: function(req, res) {
    knex("store")
      .insert({
        name: req.body.name,
        description: req.body.description
      })
      .then(()=>{
        res.redirect("/");
      })
  },
}
