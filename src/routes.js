const routes = require("express").Router;

const { User } = require("./app/models/index");

User.create({
  name: "Eduardo Junior",
  email: "eduardojunior@gmail.com",
  password_hash: "123"
});

module.exports = routes;
