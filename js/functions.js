import { salary_stored, afternoon_stored, night_stored, 
    saturday_stored, weekend_stored, associate_stored, option_stored, request_stored, duration_stored  } from ./all_stored_called.js

    //all functions group//

    export function generateInputForm() {
        // generate input fields and populate with values from local storage
        //...
        const fields = [
            { label: "salary", type: "number", id: "salary", readonly},
            { label: "Afternoon", type: "number", id: "aShift", readonly},
            { label: "Night", type: "number", id: "nShift", readonly},
            { label: "Saturday", type: "number", id: "satDay", readonly},
            { label: "Sunday", type: "number", id: "sunDay", readonly},
            { label: "Weekday", type: "number", id: "wkDay", readonly},
            { label: "Association", type: "number", id: "association", readonly},
            { label: "Loan", type: "number", id: "loan", readonly},
            { label: "Option", type: "number", id: "option", readonly},
            { label: "Request", type: "number", id: "request", readonly},
            { label: "Duration", type: "number", id: "duration", readonly}

        ];

        fields.forEach(field => {
            const input = document.createElement("input")
            input.type = field.type
            input.id = field.id
            document.querySelector("#input-form").appendChild(input)


            const label = document.createElement("label")
            label.innerText = field.label
        });
    }
export function setVariable() {
    salary_stored,
    afternoon_stored,
    night_stored,
    saturday_stored,
    weekend_stored,
    associate_stored,
    option_stored,
    request_stored,
    duration_stored  

}

export function allowOut(){
    const listAllow = {
        canteen: 360.00,
        discomfort:0.14
    }

    canteenOut.value = listAllow.canteen.toFixed(2)
    let discomfort_out =  listAllow.discomfort * salOut
    discomfort_in.value = discomfort_out.toFixed(2)

    statutoryDed(salary_Out)   
}


export function getGross() {

    const inputVals = document.querySelectorAll(".bs_input")

    let sum = 0

    inputVals.forEach(function (inputVal) {
        sum += parseInt(inputVal.value)||0

    const grossSum = document.querySelector("#sum")
    grossSum.value = sum.toFixed(2)

    })    
}

export function statutoryDed(){
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

export function tax(){
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

export function loanDeduct () {
    const sec_loan = document.querySelector(".loan_select")
    const loan_amt = document.getElementById("lamt-sum")
    let reqAmt = JSON.parse(this.localStorage.getItem("request"))
    if (!reqAmt || 0){
        sec_loan.style.display = "block"
    }



}

export function net(){
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













