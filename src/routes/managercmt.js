const route = require("express").Router();
const Managercmt = require("../controllers/managercmt");

route.post("/upload",Managercmt.addcmt);
route.get("/getdata",Managercmt.getalldata);

module.exports = route;