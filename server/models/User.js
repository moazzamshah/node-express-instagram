const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personSchema = new Schema({
  name: String,
  email: String,
  age: Number,
  password: String,
  country: String,
  role: Boolean,
  my_picture: String,
});

const Person = mongoose.model('Person', personSchema);

module.exports = Person;
