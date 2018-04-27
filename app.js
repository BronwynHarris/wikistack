const express = require('express');//express static (and line 2)
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const { db } = require('./models');
const wiki = require('./routes/wiki')
const user = require('./routes/user')
//const Sequelize = require('sequelize');
// const db = new Sequelize('postgres://localhost:5432/your-db')

const PORT = 1337;
// app.listen(PORT, ()=> {
//   console.log(`Server is listening on port ${PORT}`);
// });

const init = async () => {
  await db.sync({force: true})//should we include await?
  app.listen(PORT, ()=> {
    console.log(`Server is listening on port ${PORT}`);
  });
}

init(); // Needs to be called for syncing of DB.

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(express.static('public'));

app.use('/wiki', wiki); // So within the wiki file, every '/' will automatically go to /wiki/---- b/c of line 31

app.get('/', (req,res,next) => {
  console.log(req.body);
  res.send('<html><head><link rel="stylesheet" type="text/css" href="stylesheets/style.css"></head><body>Hi</body></html>');
  // res.send('Send status 404');
});


