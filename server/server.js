const express = require("express");
const app = express();
const port = 4564;
// const port = process.env.PORT;
const fileUpload = require('express-fileupload');
var cookieParser = require('cookie-parser')


let polls = {};
// // initlizing mongo db
// MongoClient.connect(uri, function (err, dbtemp) {
//   if (err) {
//     console.log(err);
//   }
//   var dbo = dbtemp.db("LMath");

//   db = dbo;
//   dbo.createCollection("users", function (err, res) {
//   });
//   usersCollection = dbo.collection("users");
//   lessonsCollection = dbo.collection("lessons");

//   mongoSetUpDone();

// });


if (process.env.isHeroku == "true");

app.use(fileUpload({
  limits: { fileSize: 50 * 1024 * 1024 },
  useTempFiles: true,
}));

app.use(express.json({ limit: '50mb' }));
app.use(cookieParser());
app.use(express.urlencoded({ limit: '50mb' }));

// Add headers
app.use(function (req, res, next) {

  if (req.headers.origin == undefined) {
    res.setHeader('Access-Control-Allow-Origin', "http://127.0.0.1:4564");
  } else {
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, authorization, SessionId");
  res.setHeader('Access-Control-Allow-Credentials', true);

  next();
});

app.listen(port, function () {
  console.log("PickVote Server Started on port " + port);
});

app.get('/get/poll/:id', (req, res) => {
  res.send(JSON.stringify({
    poll:polls[req.params.id],
  }));
})

app.post('/post/create/poll', (req, res) => {
  let newPollData = req.body.poll;
  polls[newPollData.id] = newPollData;
});


app.use('/', express.static("./client/"))
