const user = require('../models/userModels');
const bcyptjs = require('bcryptjs');
const path = require('path');

const config = require('../config/config');

// insert data:::

const insert_data = async (req, res) => {

  try {

    const users = new user({
      title: req.body.title,
      description: req.body.description


    });
    const userData = await users.save();
    const userId = userData._id;
    res.status(200).send({ msg: "Your data has been inserted. And your id is ", data: userId });
  }
  catch (error) {

    res.status(400).send(error.message);
  }
}


// GetAllData ::- GET

const get_all_data = async (req, res) => {

  try {

    const getData = await user.find();

    const formatData = getData.map(item => ({


      title: item.title,
      description: item.description,

      id: item._id

    }));

    res.status(200).json(formatData);

    //    res.status(200).send({ success: true, msg: "All Data are-", data: getData })

  } catch (error) {
    res.send(error.message)
  }
}







// Get Particular Data

const get_data = async (req, res) => {

  try {


    const id = req.params.id;

    const findData = await user.findOne({ _id: id });


    if (findData) {

      const imagename = findData.images;
      res.status(200).send({ success: true, data: findData });

    }
    else {
      res.send("Invalid ID");
    }



  } catch (error) {
    res.send(error.message);
  }

}



// GET IMAGE API::::-



module.exports = {
  insert_data,
  get_all_data,
  get_data,


}