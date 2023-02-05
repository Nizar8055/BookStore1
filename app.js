const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes")
const app = express();
const cors = require('cors')

//Middlewares
app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./client/build/index.html"),
    function (err) {
      res.status(500).send(err);
    }
  );
});

app.get("/", (req, res)=> {
  res.send("<h1>Back end server running successfully</h1>")
})


app.use('/books', router,(req, res, next)=> {
  
})

mongoose
  .connect(
    "mongodb+srv://admin:avldk9fDXVOZf3YD@cluster0.uo7pqlp.mongodb.net/bookStore?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(5000);
  }).catch((err)=>console.log(err));

// avldk9fDXVOZf3YD
