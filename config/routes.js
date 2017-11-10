//Update the name of the controller below and rename the file.
const store = require("../controllers/store.js")
module.exports = function(app){

  app.get('/create/store', store.createStoreForm);

  app.post('/create/store', store.create);

}
