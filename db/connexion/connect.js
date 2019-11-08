const mongoose = require('mongoose');
console.log('Connexion à la base mongodb');

mongoose
  .connect(
    'mongodb+srv://ndjerrou:<cx+4C8Ad,yN@cluster0-p5vm9.mongodb.net/bank-acccount-api?retryWrites=true&w=majority',
    { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
  )
  .catch(err => {
    console.log('Err connexion : ', err);
  });
