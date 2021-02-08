const express = require('express');
const app = express();

var bodyParser = require('body-parser');
 
global.__basedir = __dirname;
 
const db = require('./src/app/config/db.config.js');
  
// force: true will drop the table if it already exists
/*db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync with { force: true }');
}); */

let router = require('./src/app/routers/router.js');

const cors = require('cors')
const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

app.use(bodyParser.json());
/*app.use(bodyParser.urlencoded({
  extended: true
}));*/
app.use(express.static('resources'));
app.use('/', router);

// Create a Server
const server = app.listen(8080, function () {
 
  let host = server.address().address
  let port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port); 
})