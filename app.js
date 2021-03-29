const express = require("express");
const cors = require("cors");
const app = express();
const {PORT, dbConfigMongo} = require('./config')
const localPort = process.env.PORT || 3000;

//contoller
const studentRouter = require('./routes/classRoomController')
const mahasiswaRouter = require('./routes/mahasiswaController')
const bukuRouter = require('./routes/bukuController')
const pinjamBukuRouter = require('./routes/pinjamBukuController')
// MONGODB_LIVE=mongodb+srv://school:Dybala10@school.f7fjx.mongodb.net/school?retryWrites=true&w=majority
// PORT=9999
console.log("ini port", localPort)
// console.log("db mongo port", dbConfigMongo)
app.use(cors())
// app.options('*', cors())
app.use(express.json())
// app.use(routes)


app.get("/", (req, res) => {
  res.send("halo");
});
app.use(studentRouter);
app.use(mahasiswaRouter);
app.use(bukuRouter);
app.use(pinjamBukuRouter);

if (dbConfigMongo) {

  app.listen(localPort, () => {
    console.log("tes jalan", PORT);
  });
} else {
  console.log("error");
}