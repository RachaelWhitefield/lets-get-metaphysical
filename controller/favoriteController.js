const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Favorites.find({ userId: req.user.id})

      .sort({ createdAt: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    
    
    db.Favorites.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
      // console.log('This is the user: ', req.user);
      req.body.userId = req.user.id
      // console.log('this is the request body passing into the database', req.body)
      db.Favorites.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Favorites.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
