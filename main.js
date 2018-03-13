var months =['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var days=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];


var refresh= function(){
    var mydate= new Date();

document.getElementById("Day").innerHTML =days[mydate.getDay()-1] + ',' +mydate.getUTCDate();
document.getElementById("Month").innerHTML =months[mydate.getMonth()-1];
document.getElementById("Year").innerHTML =mydate.getFullYear();

document.getElementById("Hour").innerHTML =mydate.getHours();
document.getElementById("Minutes").innerHTML =mydate.getMinutes();
document.getElementById("Seconds").innerHTML =mydate.getSeconds();

}

setInterval(refresh,1000);



