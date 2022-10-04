let name = prompt("Lütfen adınızı giriniz");

 document.querySelector("#myName").innerHTML = name;

function time(){
 let date = new Date();
 let hours = date.getHours();
 let minutes = date.getMinutes();
 let second = date.getSeconds();


 let getDay =date.getDay();
switch(getDay){
    case 1 : 
    getDay ="Pazartesi"
    break;
    case 2 : 
    "Salı"
    break;
    case 3 : 
    "Çerşamba"
    break;
    case 4 : 
    "Perşembe"
    break;
    case 5 : 
    getDay = "Cuma"
    break;
    case 6 : 
    "Cumartesi"
    case 7 : 
    getDay ="Pazar"
    break;

}

hours = hours < 10 ? "0" + hours : hours;
minutes = minutes < 10 ? "0" + minutes : minutes;
second = second < 10 ? "0" + second : second;

let clock = hours + ":" + minutes + ":" + second + " " + getDay;
document.querySelector("#clockInput").innerHTML = clock;

setTimeout(time,1000);
}
time();