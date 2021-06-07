module.exports = () => {
  key = "1829746839d2411bbf40f904f2317913539dc3960a1123ec";
  sid = "ieee61";
  token = "8bb9dc7ac9a93781e18601200de69d8561c676cfca1c7689";
  // this is the victim
  from = "9999508409";
  // this is the person who has wrongly arked
  to = "8826228320";

  const formUrlEncoded = (x) =>
    Object.keys(x).reduce(
      (p, c) => p + `&${c}=${encodeURIComponent(x[c])}`,
      ""
    );

  const axios = require("axios");
  url =
    "https://" +
    key +
    ":" +
    token +
    "@api.exotel.in/v1/Accounts/" +
    sid +
    "/Calls/connect";
  axios
    .post(
      url,
      formUrlEncoded({
        From: from,
        To: to,
        CallerId: "011-411-70854",
        CallerType: "trans",
      }),
      {
        withCredentials: true,
        headers: {
          Accept: "application/x-www-form-urlencoded",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    )
    .then((res) => {
      console.log(`statusCode: ${res.statusCode}`);
      console.log(res);
    })
    .catch((error) => {
      console.error(error);
    });
}
