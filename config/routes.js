//Update the name of the controller below and rename the file.
const store = require("../controllers/store.js");
const product = require("../controllers/product.js")
module.exports = function(app){
  // Middleware VVV!!!
  app.use(checkSession);

  app.get("/", product.viewAll);

  app.get('/create/store', store.createStoreForm);

  app.post('/create/store', store.create);

  app.get("/create/product", product.createProductForm);

  app.post("/create/product", product.create);

  app.get("/compare/:id", product.addCompare);

  app.get("/showcomparison", product.showComparison);

}

function checkSession( req, res, next){
  if(req.session.compare){
    next();
  }else{
    req.session.compare = [];
    req.session.save(()=>{
      next();
    });
  }
}
