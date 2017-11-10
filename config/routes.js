//Update the name of the controller below and rename the file.
const store = require("../controllers/store.js");
const product = require("../controllers/product.js")
module.exports = function(app){

  app.get("/", product.viewAll);

  app.get('/create/store', store.createStoreForm);

  app.post('/create/store', store.create);

  app.get("/create/product", product.createProductForm);

  app.post("/create/product", product.create);


}
