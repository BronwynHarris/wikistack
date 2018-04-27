const express = require('express');//express static (and line 2)
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const { db } = require('./models');
//const Sequelize = require('sequelize');
// const db = new Sequelize('postgres://localhost:5432/your-db')

const PORT = 1337;
// app.listen(PORT, ()=> {
//   console.log(`Server is listening on port ${PORT}`);
// });

const init = async () => {
  await models.db.sync({force: true})//should we include await?
  app.listen(PORT, ()=> {
    console.log(`Server is listening on port ${PORT}`);
  });
}

init();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/', (req,res,next) => {
  console.log('hello world');
  res.send('<html><head><link rel="stylesheet" type="text/css" href="stylesheets/style.css"></head><body>Hi</body></html>');
  // res.send('Send status 404');
});


