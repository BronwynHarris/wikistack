const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:1337/wikistack');

db.authenticate().
then(() => {
  console.log('connected to the database');
})

module.exports = {
  db
}
