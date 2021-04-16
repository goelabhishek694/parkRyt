
// "EXCLUSIVE500PROMO"
const axios = require('axios');
let secrets=require('../../App/public/api');

module.exports=(from,to)=>{
key = secrets.key;
sid = secrets.sid;
token = secrets.token;
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