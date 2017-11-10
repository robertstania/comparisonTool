const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
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
