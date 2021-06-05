const express = require("express");
const path = require("path");
// const ngrock=require('ngrok');
var call=require("./public/flow");
var app = express();
app.use(express.urlencoded({ extended: true })); // it adds url encoded string into request's body 
app.use(express.static('public'));
app.use(express.json());
const userModel = require("./db");
const axios = require('axios');



// Base Page 
app.get("/", function (req, res) {
    // res.send("hello"); kuch nhi hua 
    res.sendFile(path.join(__dirname + "App/public/index.html"));
})

app.get("/submit",function(req,res){
    console.log(res);
})
// calling the owner of the car
app.post("/submit", async function (req, res) {

    const { userphone, carnumber } = req.body;
    // const guest = await userModel.findOne({carnumber:carnumber});
    try{
        // console.log(carnumber);
        
        // if (!guest) {
        //     console.log("did not find data");
        //     console.log(req.body);
        //     console.log(guest);

        // }
         {
            console.log("inside else");
            // console.log(guest.carnumber);
            // console.log(guest);
            console.log("from: "+userphone);
            // console.log("to: "+guest.phoneno);
            // call(userphone,"9312509061");
            call();
            res.json({ result: ""});
        }
    }
    catch(err){
        console.log(err);
    }
    // console.log(dataArray);

    // res.sendFile(path.join(__dirname + "/public/index.html"));
})

// Enter Phone number
// app.get("/checkout", function (req, res) {
//     res.sendFile(path.join(__dirname + "/public/checkout.html"));
// })

// Get otp if phone number is valid in db
// app.post("/otp", async function (req, res) {
//     const { phoneNo } = req.body;
//     // phoneNo=parseInt()

//     try {
//         smsFlag = 1;
//         outPhone = phoneNo;
//         console.log("otp post method")
//         const guest = await userModel.findOne({ vphoneno: outPhone, checkOutTime: "Pending" });
//         if (guest) {
//             otp = otpGenerator();
//             console.log(otp)
//             sendSms(9999508409, phoneNo, smsFlag, null, null, null, otp);
//             console.log(req.body);
//             res.json({ result: "user verified" });
//         }
//         else {
//             console.log("inside if ");
//             res.json({ result: "user not found" });
//         }
//     }
//     catch (err) {
//         console.log(err);
//     }
// })
// OTP validation 
// app.post("/check", async function (req, res) {
//     console.log("check post method")
//     const { OTP } = req.body;
//     console.log(OTP);
//     console.log(otp);

//     try {
//         if (OTP === otp) {
//             console.log("OTP Validated");
//             const query = { vphoneno: outPhone, checkOutTime: "Pending" }
//             // const user=await userModel.findOne({vphoneno:outPhone})
//             // const id=user._id;
//             const { time } = myTime()
//             await userModel.findOneAndUpdate(query, { checkOutTime: time })
//             // send Email to visitor
//             const user = await userModel.findOne({ checkOutTime: time })
//             const dataArray = user;
//             sendMail(dataArray.vemail, emailFlag, dataArray.vname, null, dataArray.vphoneno, dataArray.checkinTime, dataArray.checkOutTime, dataArray.hname, dataArray.visitAdress);

//             res.json({ result: "checked out succesfully" });
//         }
//         else {
//             res.json({ result: "" });
//         }
//     }

//     catch (err) {
//         console.log(err);
//     }
// })

// app.get("/logbook", async function (req, res) {
//     const users = await userModel.find();
//     res.render("index", { users });
// })

const port = process.env.PORT || 4000;

app.listen(port, function () {
    console.log("server is listening on port 4000")
});