const express = require("express");
const path = require("path");
// const ngrock=require('ngrok');
var callFlow = require("./controller/flow");
let callAgent = require("./controller/call");
let numberPLateRecognizer=require("./controller/image");
var app = express();
app.use(express.urlencoded({ extended: true })); // it adds url encoded string into request's body
app.use(express.static("public/html"));
// app.use(express.static("public/js"));
app.use(express.json());
const userModel = require("./db");
const axios = require("axios");
let selectedDigit;
console.log(__dirname);

// Base Page
app.get("/", function (req, res) {
  // res.send("hello"); kuch nhi hua

  res.sendFile(path.join(__dirname + "/public/html/index.html"));
});

// get carNUmber from ALPR api
// app.post("/submit",async function(req,res){
//   try{
    
//     numberPLateRecognizer();
//     callFlow();
//     console.log("Number plate recognized");
//     res.sendFile(path.join(__dirname + "/public/response.html"));
//   }
//   catch(err){
//     console.log(err);
//   }
// })
// get request by exotel to give offender's response
app.get("/submit", function (req, res) {
  console.log("digit selected ", res.req.query.digits);
  selectedDigit = res.req.query.digits;
});

// calling the owner of the car via IVR
app.post("/submit", async function (req, res) {
  const { userphone, carnumber } = req.body;
  // const guest = await userModel.findOne({carnumber:carnumber});
  try {
    console.log("inside else");
    // console.log(guest.carnumber);
    // console.log(guest);
    console.log("from: " + userphone);
    console.log("carNumberPath: " + carnumber);
    
    // console.log("to: "+guest.phoneno);
    // call(userphone,"9312509061");
    // let promise=new Promise(numberPLateRecognizer());
    // promise.then(){
      numberPLateRecognizer();
      callFlow();

    // }
    
    // setTimeout()
    function fn() {
      // let a=selectedDigit.length;
      // console.log(a);
      if(selectedDigit) {
          var arr = selectedDigit.split("");
          var num = parseInt(arr[1]);
      }
      else{
        num=0;
      }
      // let  || 0;
      // console.log(selectedDigit);
      // console.log(parseInt("1",10));
      console.log(num);
      console.log(typeof num);
      console.log("current directory",__dirname);
      if (num == 1) {
        console.log("inside 1");
        res.sendFile(path.join(__dirname + "/public/html/response1.html"));
      } else if (num == 2) {
        console.log("inside 2");
        callAgent();
        res.sendFile(path.join(__dirname + "/public/html/response2.html"));
      } else if(num==0){
        res.sendFile(path.join(__dirname + "/public/html/response3.html"));
      }
      // res.json({ result: ""});
    }

    setTimeout(fn, 30000);
  } 
  catch (err) {
    console.log(err);
  }
});



app.post("/callOwner", async function (req, res) {
    try{
        callAgent();
        res.sendFile(path.join(__dirname + "/public/html/response4.html"));
    }
    catch(err){
        console.log(err);
    }
}); 




const port = process.env.PORT || 4000;

app.listen(port, function () {
  console.log("server is listening on port 4000");
});
