let stringVal = "Null";
let data;
let alldata;
let url;
var macAddress = "";
var computerName = "";

let cnt = false;

// var wmi = new ActiveXObject ("WbemScripting.SWbemLocator");
// var service = wmi.ConnectServer(".");
// e = new Enumerator(service.ExecQuery("SELECT * FROM Win32_NetworkAdapterConfiguration WHERE IPEnabled = True"));

// for(; !e.atEnd(); e.moveNext()) {
//     var s = e.item();
//     macAddress = unescape(s.MACAddress);

// }

function getLocation() {
    // if (navigator.geolocation) {
        //     navigator.geolocation.getCurrentPosition(showPosition);
        // } else { 
            //     stringVal = "Geolocation is not supported by this browser.";
            // }
    const request = new XMLHttpRequest();
    request.open("GET", "https://api.ipify.org?format=text");
    request.send();
    request.onload = () => {
        if (request.status == 200) {
            data = (request.response);
            console.log(data);
            url = `https://geo.ipify.org/api/v1?apiKey=at_Nb8S6zZTFkPsw2FT94R2ze7vsZbH7&ipAddress=${data}`;
            request.open("GET", url);
            request.send();
            request.onload = () => {
                if (request.status == 200) {
                    alldata = (request.response);
                    console.log(alldata);
                    stringVal = "\nIP address: " + data + 
                                "\nAll Data: " + alldata;
                    var bb = new Blob([stringVal], { type: 'text/plain' });
                    var a = document.createElement('a');
                    a.download = 'download.txt';
                    a.href = window.URL.createObjectURL(bb);
                    a.click();
                }
                else {
                    console.error(request.statusText);
                }
            }
        }
        else {
            console.error(request.statusText);
        }
    }
}

// function showPosition() {
//     // stringVal = "Latitude: " + position.coords.latitude + 
//     //             "\nLongitude: " + position.coords.longitude + 
//                 "\nMac Address: " + macAddress + 
//                 "\nDevice Name: " + computerName;
// }
