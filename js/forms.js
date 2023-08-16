//forms
const formAllow = document.getElementById("Allowance")
const formLoan = document.getElementById("loan_sec")


//input for formAll
const formSal = document.getElementById("bs")
const formAfter = document.getElementById("Afternoon")
const formNight = document.getElementById("night")
const formWkd = document.getElementById("weekday")
const formSat = document.getElementById("satday")
const formSun = document.getElementById("sday")
const formHol = document.getElementById("hday")

//input for formLoan
const select = document.getElementById("selector")
const formLoanAmt = document.getElementById("lamt")
const formLoanDue = document.getElementById("idue")
const formLoanDate = document.getElementById("sdate")


//button 
const btnSubmit = document.getElementById("sub")
const btnReset = document.getElementById("Cancel")


//button function

btnSubmit.addEventListener("click", btnValidate)

function btnValidate(){   
        window.location.href ="result.html"
    }


btnReset.addEventListener("click", btnCancel)
    
function btnCancel(){
   return false
}

//varification

