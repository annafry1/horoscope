var signs = ["Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn"];
var messages = ["pour water out of the vase", "fish make the yin yang",  "you're a sad goat", "don't get a septum piercing", "you're a two faced liar!",
    "beware of claws", "NANTS INGONYAMA BAGITHI BABA", "you are a beautiful woman", "the scales will be equal", "those are some big claws",
    "the arrow points North-East", "a goatee would make you look better"];
var images = ["aquarius.jpg", "pisces.jpg", "aries.jpg", "taurus.jpg", "gemini.jpg", "cancer.jpg", "leo.jpg", "virgo.jpg", "libra.jpg",
    "scorpio.jpg", "sagittarius.jpg", "capricorn.jpg"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


function onSubmit(){
    var month = document.getElementById("month").value;
    var day = document.getElementById("day").value;
    var signNum = determineSign(month, day);
    var name = document.getElementById("name").value;
    if(validDate(month,day)){
        console.log(123);
        alert("That is not a valid date. ");
    }else{
        checkBday(month, day);
        document.getElementById("sign").innerHTML = signs[signNum - 1];
        document.getElementById("message").innerHTML = name + ", " + messages[signNum - 1];
        document.getElementById("image").src = images[signNum - 1];
    }
}

function determineSign(month,day){
    if((month === "January" && (day >= 20 && day <= 31)) || (month === "February" && (day >= 1 && day <=18))){
        console.log(1);
        return 1;
    }else if((month === "February" && (day >= 19 && day <= 31)) || (month === "March" && (day >= 1 && day <=20))){
        console.log(2);
        return 2;
    }else if((month === "March" && (day >= 21 && day <= 31)) || (month === "April" && (day >= 1 && day <=19))){
        console.log(3);
        return 3;
    }else if((month === "April" && (day >= 20 && day <= 31)) || (month === "May" && (day >= 1 && day <=20))){
        console.log(4);
        return 4;
    }else if((month === "May" && (day >= 21 && day <= 31)) || (month === "June" && (day >= 1 && day <=20))){
        console.log(5);
        return 5;
    }else if((month === "June" && (day >= 21 && day <= 31)) || (month === "July" && (day >= 1 && day <=22))) {
        console.log(6);
        return 6;
    }else if((month === "July" && (day >= 23 && day <= 31)) || (month === "August" && (day >= 1 && day <=22))) {
        console.log(7);
        return 7;
    }else if((month === "August" && (day >= 23 && day <= 31)) || (month === "September" && (day >= 1 && day <=22))) {
        console.log(8);
        return 8;
    }else if((month === "September" && (day >= 23 && day <= 31)) || (month === "October" && (day >= 1 && day <=22))) {
        console.log(9);
        return 9;
    }else if((month === "October" && (day >= 23 && day <= 31)) || (month === "November" && (day >= 1 && day <=21))) {
        console.log(10);
        return 10;
    }else if((month === "November" && (day >= 21 && day <= 31)) || (month === "December" && (day >= 1 && day <=21))) {
        console.log(11);
        return 11;
    }else if((month === "December" && (day >= 22 && day <= 31)) || (month === "January" && (day >= 1 && day <=19))) {
        console.log(12);
        return 12;
    }
}

function checkBday(month, day){
    var date = new Date();
    var m = date.getMonth();
    var d = date.getDate();
    var message = "Happy birthday!";
    console.log(d);
    if (months[m] === month && d === parseInt(day)) {
        document.getElementById("birthday").innerHTML = message;
    }
}

function validDate(month, day){
    if (month === "February" && (day == 30 || day == 31)){
        return true;
    }else if ((month === "April" || month === "June" || month === "September" || month === "November" )&& (day == 31)){
        return true;
    }else{
        return false;
    }
}