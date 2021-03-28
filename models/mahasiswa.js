const mongoose = require('mongoose');

const MahasiswaSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  score: Number,
  nomerAbsen: Number,
});

//create tableotomatis
const Mahasiswa = mongoose.model("mahasiswa",MahasiswaSchema);
module.exports = Mahasiswa;