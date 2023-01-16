const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const db = require("./config/db");
const app = express();

const port = 8000;
app.use(express.json());

MongoClient.connect(db.url, (err, database) => {
  if (err) return console.log(err);
  global.db = database.db("todolist");
  require("./app/routes")(app);
  app.listen(port, () => {
    console.log("We are live on " + port);
  });
});
