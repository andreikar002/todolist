const NoteService = require("../services/NoteService.js");
const { validationResult } = require("express-validator");

class NoteController {
  constructor() {}

  static async index(req, res) {
    const result = await NoteService.getAll();
    res.send(result);
  }

  static async show(req, res) {
    const result  = await NoteService.getById(req);
    res.send(result)
  }

  static async store(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(422).send(errors);
    } else {
      const result = await NoteService.create(req);
      res.send(result);
    }
  }

  static async destroy(req, res) {
    const result = await NoteService.delete(req);
    res.send(result);
  }

  static async update(req, res) {
    const result = await NoteService.correct(req);
    res.send(result);
  }
}

module.exports = NoteController;
