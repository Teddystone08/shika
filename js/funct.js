const basic = document.getElementById("bs")
const after = document.getElementById("point")
const night = document.getElementById("night")
const wk = document.getElementById("weekday")
const sat = document.getElementById("satday")
const sun = documwnt.getElementById("sday")
const hday = document.getElementById("hday")
const cant = 360.00


function discomfort(){
    dcom = basic * 15%
    document.write(dcom)
}

function after_shift(){
    a_shift = (basic * 3.5 * after)/432.5
    return a_shift;
}
 function night_shift(){
    n_shift = (basic * 3.5 * night)/216.24
    return n_shift;
 }

 function ot_wkday(){
    wd_ot = (basic * wk)/173
    return wd_ot;
 }

 function ot_holiday() {
    h_ot = (basic * hday)/173 * 2
    return h_ot;

 }





