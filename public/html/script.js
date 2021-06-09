let detailForm = document.querySelector("#Details-Form");
let userphone = document.getElementById("userphone");
let carnumber=document.getElementById("carnumber");

// async function address() {
//     // console.log(x, y)
//     // var lat,lng;
//     const position = await promise;
//     console.log(position);
//     var lat = position.coords.latitude;
//     var lng = position.coords.longitude;
    
//     var response = await axios.get(`https://reverse.geocoder.api.here.com/6.2/reversegeocode.json?app_id=pzHvyHxlO4VtQG6IFyMV&app_code=kJqGg033KFsMNOTGuM3dhA&mode=retrieveAddresses&prox=${lat},${lng},1`);
//     // console.log(response);
//     return response.data.Response.View[0].Result[0].Location.Address.Label
// }
async function submitData(userphoneVal,carnumberVal) {
    const response = await axios.post("/submit", {
        userphone: userphoneVal,
        carnumber: carnumberVal
    });
    if (response.data.result) {
        // alert("user verified");
        location.assign("/public/index.html");
    } 
    // else {
    //     alert("Owner could not be contacted");
    //     // location.assign("public\html\response4.html")
    // }
}
if (detailForm) {
    detailForm.addEventListener("submit", async function (e) {
        e.preventDefault();
        const userphoneVal = userphone.value;
        let carnumberVal="DL 4C AF 6569";
        // const hphonenoVal = parseInt("91"+hphoneno.value);;
        submitData(userphoneVal,carnumberVal);
    })
}
// C:\Users\Deepali Bindal\Desktop\AbhishekGoel\parkRyt\public\html\response1.html