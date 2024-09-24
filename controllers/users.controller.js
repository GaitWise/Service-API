const model = require('../models/users.model')

function getUsers(req, res){
  res.send(model)
}

module.exports = {
  getUsers
}