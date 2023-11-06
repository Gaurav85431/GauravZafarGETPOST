const express = require('express');
const user_routes = express();

const bodyParser = require('body-parser');
user_routes.use(bodyParser.json());
user_routes.use(bodyParser.urlencoded({ extended: true }));

//

const path = require("path");
const auth = require('../middleware/auth');



const user_controller = require('../controllers/userControllers');

// Insert API::- POST

user_routes.post('/insert', user_controller.insert_data);

user_routes.post('/delete/:id', user_controller.delete_data);

user_routes.post('/update/:id', user_controller.update_data);


// Get Single Data

user_routes.get('/getData/:id', user_controller.get_data);

// Get All Data::
user_routes.get('/getAllData', user_controller.get_all_data);



module.exports = user_routes;

