function myNextpage() {
    location.href = "./form_shika.html";
}

function myNextpageSec() {
    location.href = "./calculate.html";
}

function data() {
    var sal = document.getElementById("bsal").value   
    var aft = document.getElementById("ashift").value
    var hol= document.getElementById("hday").value
    var nig = document.getElementById("nshift").value
    var sat = document.getElementById("satday").value
    var sun= document.getElementById("sday").value
    var week= document.getElementById("wkday").value
    var gtp= document.getElementById("assoc").value

    if(sal == ""){
        alert("Please provide basic salary");

    } 
}

