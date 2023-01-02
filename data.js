let stringVal = "Null";
let data;
let alldata;
let url;
var macAddress = "";
var computerName = "";


let request = new XMLHttpRequest();
request.open("GET", "https://api.ipify.org?format=text");
request.send();
request.onload = () => {
    if (request.status == 200) {
        data = (request.response);
        url = `https://geo.ipify.org/api/v1?apiKey=at_Nb8S6zZTFkPsw2FT94R2ze7vsZbH7&ipAddress=${data}`;
        request.open("GET", url);
        request.send();
        request.onload = () => {
            if (request.status == 200) {
                alldata = (request.response);
            }
        }
    }
}

// var wmi = new ActiveXObject ("WbemScripting.SWbemLocator");
// var service = wmi.ConnectServer(".");
// e = new Enumerator(service.ExecQuery("SELECT * FROM Win32_NetworkAdapterConfiguration WHERE IPEnabled = True"));

// for(; !e.atEnd(); e.moveNext()) {
//     var s = e.item();
//     macAddress = unescape(s.MACAddress);

// }

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        stringVal = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    stringVal = "Latitude: " + position.coords.latitude + 
                "\nLongitude: " + position.coords.longitude + 
                "\nIP address: " + data + 
                "\nAll Data: " + alldata + 
                "\nMac Address: " + macAddress + 
                "\nDevice Name: " + computerName;
    var bb = new Blob([stringVal], { type: 'text/plain' });
    var a = document.createElement('a');
    a.download = 'download.txt';
    a.href = window.URL.createObjectURL(bb);
    a.click();
}
