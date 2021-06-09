

module.exports = () => {
  const fetch = require("node-fetch");
  const FormData = require("form-data");
  const fs = require("fs");

  let image_path = "/path/to/car.jpg";
  let body = new FormData();
  body.append("upload", fs.createReadStream(image_path));
  // Or body.append('upload', base64Image);
  body.append("regions", "in"); // Change to your country
  fetch("https://api.platerecognizer.com/v1/plate-reader/", {
    method: "POST",
    headers: {
      Authorization: "Token db96c909cea7bf040c25a841be82ddabd67490b4",
    },
    body: body,
  })
    .then((res) =>{
        console.log(res);
    })
    // .then((json) => console.log(json))
    .catch((err) => {
        console.log("error aa gaya");
      console.log(err);
    });
};
