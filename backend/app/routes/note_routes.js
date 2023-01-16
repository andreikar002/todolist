const { check } = require("express-validator");
const NoteController = require("../controllers/NoteController.js");

module.exports = function (app) {
  app.all("*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "*");
    next();
  });

  app.get("/notes", (req, res) => NoteController.index(req, res));

  app.get("/notes/:id", (req, res) => NoteController.show(req, res));

  app.post(
    "/notes",
    [
      check("title").exists().withMessage("Title is required"),
      check("content").exists().withMessage("Content is required"),
    ],
    (req, res) => NoteController.store(req, res)
  );

  app.put("/notes/:id", (req, res) => NoteController.update(req, res));

  app.delete("/notes/:id", (req, res) => NoteController.destroy(req, res));
};
