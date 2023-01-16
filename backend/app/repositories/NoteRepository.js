const notes = global.db.collection("notes");

const NotesRepopsitory = {
  async getAll() {
    const result = await notes.find().toArray();
    return result;
  },

  async getById(form) {
    const result = await notes.find(form).toArray();
    return result
  },

  async create(form) {
    const result = await notes.insertOne(form);
    return result;
  },

  async delete(form) {
    const result = await notes.deleteOne(form);
    return result;
  },

  async correct(id, form) {
    const result = await notes.updateOne({ _id: id }, { $set: form });
    return result;
  },

};

module.exports = NotesRepopsitory;
