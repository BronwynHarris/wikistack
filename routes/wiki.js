const express = require('express');
const router = express.Router(); //
const user = require('./wiki')
const addPageHTML = require('../views/addPage') // Do we have to individually require each file? Wouldn't that become tedious after multiple routers? Yes.
const {Page} = require('../models');
const {addPage} = require('../views');


router.get('/', (req, res, next) => {
  res.redirect('/'); // Redirect doesn't take in current location where you used res.use into account. It goes to wherever you literally tell it.
})

router.post('/', (req, res, next) => {

})

router.get('/add', (req, res, next) => {
  res.send(addPageHTML())
})

router.post('/add', (req, res, next) => {
  res.json(req.body); // Is line 12 putting submitted info into the req.body object?
  // IF this is submitting, it's supposed to add a new row to our DB table.
})

module.exports = router;
