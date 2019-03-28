'use strict';

const express = require('express'),
   app = express(),
   router = express.Router(),
   PORT = process.env.PORT || 3000,
   db = require("./models")
   
   require('dotenv').config()

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

db.sequelize.sync({force: true}).then( () => {
   app.listen(PORT, () => console.log("App listening on localhost:" + PORT))
 })
 
app.get('/', function (req, res) {
   res.sendfile('./public/index.html');
})

app.get('/ar', (req,res) => {
   res.sendfile('./public/arscene.html')
 })

app.post("/subscribe", (req, res) => {

   db.User.create({email: req.body.data})
   .then(dbUser => {
      res.json(dbUser)
   })

})