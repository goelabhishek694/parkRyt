const express = require("express");
const path = require("path");
// const ngrock=require('ngrok');
var callFlow = require("./public/flow");
let callAgent = require("./public/call");

var app = express();
app.use(express.urlencoded({ extended: true })); // it adds url encoded string into request's body
app.use(express.static("public"));
app.use(express.json());
const userModel = require("./db");
const axios = require("axios");
let selectedDigit;
console.log(__dirname);

// Base Page
app.get("/", function (req, res) {
  // res.send("hello"); kuch nhi hua

  res.sendFile(path.join(__dirname + "public/index.html"));
});

app.get("/submit", function (req, res) {
  console.log("digit selected ", res.req.query.digits);
  selectedDigit = res.req.query.digits;
});

app.post("/submit/call", async function (req, res) {});
// calling the owner of the car via IVR
app.post("/submit", async function (req, res) {
  const { userphone, carnumber } = req.body;
  // const guest = await userModel.findOne({carnumber:carnumber});
  try {
    // console.log(carnumber);

    // if (!guest) {
    //     console.log("did not find data");
    //     console.log(req.body);
    //     console.log(guest);

    // }

    console.log("inside else");
    // console.log(guest.carnumber);
    // console.log(guest);
    console.log("from: " + userphone);
    // console.log("to: "+guest.phoneno);
    // call(userphone,"9312509061");
    callFlow();
    // setTimeout()
    function fn() {
      // let a=selectedDigit.length;
      // console.log(a);
      if(selectedDigit) let arr = selectedDigit.split("");
      let num = parseInt(arr[1]) || 0;
      // console.log(selectedDigit);
      // console.log(parseInt("1",10));
      console.log(num);
      console.log(typeof num);

      if (num == 1) {
        console.log("inside 1");
        res.sendFile(path.join(__dirname + "/public/response1.html"));
      } else if (num == 2) {
        console.log("inside 2");
        callAgent();
        res.sendFile(path.join(__dirname + "/public/response2.html"));
      } else if(num==0){
        res.sendFile(path.join(__dirname + "/public/response3.html"));
      }
      // res.json({ result: ""});
    }

    setTimeout(fn, 30000);
  } 
  catch (err) {
    console.log(err);
  }
  // console.log(dataArray);

  // res.sendFile(path.join(__dirname + "/public/index.html"));
});

const port = process.env.PORT || 4000;

app.listen(port, function () {
  console.log("server is listening on port 4000");
});
