module.exports= ()=>{
key="1829746839d2411bbf40f904f2317913539dc3960a1123ec"
sid="ieee61"
token="8bb9dc7ac9a93781e18601200de69d8561c676cfca1c7689"
from="8826228320"
// to="xxxxxxxxxx"

const axios = require('axios')
const r = x =>Object.keys(x).reduce((p, c) => p + `&${c}=${encodeURIComponent(x[c])}`, '')



url="https://"+key+":"+token+"@api.exotel.in/v1/Accounts/"+sid+"/Calls/connect.json"
axios.post(url, 
   r({
  "From": from,
//   "To": to,
  "CallerId":'095-138-86363',
  "CallerType": 'trans',
   "Url" :'http://my.exotel.com/Exotel/exoml/start_voice/374039',

}),
{   
    withCredentials: true,
    headers: {
        "Accept":"application/x-www-form-urlencoded",
        "Content-Type": "application/x-www-form-urlencoded"
    }
  },
  )
.then((res) => {
  console.log(res);
  // return res.req.query.digits;
})
.catch((error) => {
  console.error(error)
})
}