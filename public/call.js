
// "EXCLUSIVE500PROMO"
const axios = require('axios');

module.exports=(from,to)=>{
key = "054b9e5e22581eea7472879b03663aa57f7c14521adee5df";
sid = "parkryt1"
token = "1da2d60dc202ba6c1ebce50bbfa7aea7c95834f99c5d7b67"
from = from;
to = to;


const r = x => Object.keys(x).reduce((p, c) => p + `&${c}=${encodeURIComponent(x[c])}`, '')



url = "https://" + key + ":" + token + "@api.exotel.in/v1/Accounts/" + sid + "/Calls/connect.json"
axios.post(url,
    r({
        "From": from,
        "To": to,
        "CallerId": '09513886363',
        "CallerType": 'trans'
        //  "Url" :'http://my.exotel.com/parkryt1/exoml/start_voice/360654'
    }),
    {
        withCredentials: true,
        headers: {
            "Accept": "application/x-www-form-urlencoded",
            "Content-Type": "application/x-www-form-urlencoded"
        }
    },
)
    .then((res) => {
        console.log(`statusCode: ${res.statusCode}`);
        console.log("hello cuties");
        console.log(res)
    })
    .catch((error) => {
        console.error(error)
    })
};