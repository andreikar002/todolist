const NoteRepository = require("../repositories/NoteRepository.js");
const { ObjectID } = require("bson");

const NotesService = {
  async getById(req) {
    const id = new ObjectID(req.params.id);
    const form = { _id: id };
    const result = await NoteRepository.getById(form);
    return result[0];
  },
  
  async getAll(req, res) {
    const result = await NoteRepository.getAll();
    return result;
  },

  async create(req) {
    const form = { title: req.body.title, content: req.body.content };
    let result = await NoteRepository.create(form);
    return result;
  },

  async delete(req) {
    const form = { _id: new ObjectID(req.params.id) };
    const result = await NoteRepository.delete(form);
    return result;
  },

  async correct(req) {
    const id = new ObjectID(req.params.id);
    const form = {};
    if (req.body.title) form.title = req.body.title;
    if (req.body.content) form.content = req.body.content;

    const result = await NoteRepository.correct(id, form);
    return result;
  },
};

module.exports = NotesService;
