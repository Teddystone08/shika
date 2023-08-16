export {forms} as js/forms.js

//creating a varible for the buttons ids for option.html
const btnCba = document.getElementById("cba")
const btnLn = document.getElementById("loan")
const btnAll = document.getElementById("Net")

//button function for cba page
btnCba.addEventListener("click", cbaPage);

function cbaPage(){
   window.location.href ="Cba.html";
}

//button function for loan calculation.html

btnLn.addEventListener("click", loanPage);

function loanPage(){
   window.location.href ="loan.html";
}

//button function for option.html
btnAll.addEventListener("click", allowPage);

function allowPage(){
   window.location.href ="allowance.html";
}





