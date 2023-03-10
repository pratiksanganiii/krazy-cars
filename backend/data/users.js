require("dotenv").config();
const bcrypt = require("bcryptjs");
const users = [
  {
    id: 1,
    isAdmin: true,
    username: "pratiksangani",
    email: "pratik@sangani.com",
    password: bcrypt.hashSync(process.env.ADMIN_PASSWORD, 10),
  },
  {
    id: 2,
    isAdmin: false,
    username: "parthdoshi",
    email: "parth@gmail.com",
    password: bcrypt.hashSync("Test@1234", 10),
  },
];

module.exports = users;
