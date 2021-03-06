const Sequelize = require('sequelize');
//const db = new Sequelize('postgres://localhost:1337/wikistack');
const db = new Sequelize('postgres://localhost:5432/wikistack', { // Use default db server 5432 b/c DB has it's own host
// db is a client database.

// Web browser is the client. App is the server. App is also the client for your database.

    logging: false
});

db.authenticate()
.then(() => {
  console.log('connected to the database');
})

const Page = db.define('page', {
  title: {
    type: Sequelize.STRING
  },
  slug: {
    type: Sequelize.STRING
  },
  content: {
    type: Sequelize.TEXT
  },
  status: {
    type: Sequelize.ENUM('open', 'closed')
  }
});

const User = db.define('user', {
  name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  }
});

module.exports = { Page, User, db };
