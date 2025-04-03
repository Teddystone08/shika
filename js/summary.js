import { salary_Out, afternoon_out, nightOut, holidayOut, saturdayOut, sundayOut, weekdayOut, associationOut } from "./all_selectors.js";
import { discomfortOut, association_dues, grossOut } from "./all_selectors.js";

//construct input variables//
window.addEventListener("load", () => {


    setVariable()
    allowOut()
   // getGross()
   // statutoryDed() 
   // tax()
   // net()
    //loanDeduct()
      
})


function setVariable() {
    
    

}

function allowOut(){
    const listAllow = {
        canteen: 360.00,
        discomfort:0.14
    }

    canteenOut.value = listAllow.canteen.toFixed(2)
    let discomfort_out =  listAllow.discomfort * salOut
    discomfort_in.value = discomfort_out.toFixed(2)

    statutoryDed(salary_Out)   
}


function getGross() {

    const inputVals = document.querySelectorAll(".bs_input")

    let sum = 0

    inputVals.forEach(function (inputVal) {
        sum += parseInt(inputVal.value)||0

    const grossSum = document.querySelector("#sum")
    grossSum.value = sum.toFixed(2)

    })    
}

function statutoryDed(){
    const statDeduct = {
        ssnit: 0.055,
        provident: 0.081,
        union_dues:  0.01,
        canteen_ded: 300
    }

   const ssnitOut = document.querySelector("#ssnit-ded")
   const salOut = document.getElementById("sal-sum").value
   let value = statDeduct.ssnit * salOut
   ssnitOut.value = value.toFixed(2)

   const pfOut = document.querySelector("#pf")
   let pf = statDeduct.provident * salOut
   pfOut.value = pf.toFixed(2)

   const cantDedOut = document.querySelector("#cant")
   cantDedOut.value = statDeduct.canteen_ded.toFixed(2)

   const uniDues = document.querySelector("#union-ded")
   let uDues = statDeduct.union_dues * salOut
   uniDues.value = uDues.toFixed(2)

   const taxableOut = document.querySelector("#taxable-ded")
   const grossOut = document.getElementById("sum").value
   let statDed = pf + value 
   let taxable = grossOut - statDed
   taxableOut.value = taxable.toFixed(2)   
   
}

function tax(){
    const taxableOut = document.getElementById("taxable-ded").value
    const taxOutded = document.querySelector("#tax-ded")

    const taxRate = {
        first: 0,
        second: 0.05,
        third: 0.1,
        fourth: 0.175,
        fifth: 0.25,
        sixth: 0.3,
        seventh: 0.35
    }

    let callTax = 0;

    if (taxableOut <= 490) {
        callTax = taxRate.first;
    }
    
    if (taxableOut > 600) {
        let taxCall = taxableOut 
        callTax = taxCall * taxRate.second 
    }
    
    if (taxableOut > 730) {
        taxCall = taxableOut 
        callTax = taxCall * taxRate.third 
        
    }
    
    if (taxableOut > 3896.67) {
        taxCall = taxableOut
        callTax = taxCall * taxRate.fourth 
        
    }
    
    if (taxableOut > 19896.67 ) {
        taxCall = taxableOut 
        callTax = taxCall * taxRate.fifth 
              
    }
    
    if (taxableOut >= 50416.67) {
        taxCall = taxableOut
        callTax = taxCall * taxRate.sixth 
    }
    
    if(taxableOut >= 50416.67){
        taxCall = taxableOut 
        callTax = taxCall * taxRate.seventh 
    }

    taxOutded.value = callTax.toFixed(2)        
    
}

function loanDeduct () {
    const sec_loan = document.querySelector(".loan_select")
    const loan_amt = document.getElementById("lamt-sum")
    let reqAmt = JSON.parse(this.localStorage.getItem("request"))
    if (!reqAmt || 0){
        sec_loan.style.display = "block"
    }



}

function net(){
    const grossOut = document.getElementById("sum").value
    const stats = document.querySelectorAll(".stat_ded")
    const netOut = document.querySelector("#take")

    let sum = 0;

    stats.forEach(function (stat){
        sum += parseInt(stat.value)||0

    })

    let valueNet = grossOut - sum
    netOut.value = valueNet.toFixed(2)
    
}


const resetBtn = document.querySelector(".btnOk")

resetBtn.addEventListener('click', () => {
    location.href = "net_cal.html";
        localStorage.clear();

    })










