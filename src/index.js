const jwt = require("jsonwebtoken");
const Cookies = require("js-cookie");

const token = Cookies.get("token name");
const decoded = jwt.decode(token);
console.log(decoded);
