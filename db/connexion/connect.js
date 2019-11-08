const mongoose = require('mongoose');
const keys = require('../../config/keys');
console.log('Connexion à la base mongodb');

mongoose
  .connect(keys.mongoURI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .catch(err => {
    console.log('Err connexion : ', err);
  });
