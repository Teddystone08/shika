
//construct input variables//


window.addEventListener("load", function(){
    setVariable()
    allowOut()
    getGross()
    statutoryDed() 
    tax()
    net()
      
})


function setVariable() {
    
    const salOut = document.querySelector("#sal-sum")
    salOut.value = JSON.parse(this.localStorage.getItem("salary"))

    const aftetnoonOut = document.querySelector("#ashift-all")
    aftetnoonOut.value = JSON.parse(this.localStorage.getItem("afternoon"))

    const nightOut = document.querySelector("#nshift-all")
    nightOut.value = JSON.parse(this.localStorage.getItem("night"))

    const holidayOut = document.querySelector("#hday-ot")
    holidayOut.value = JSON.parse(this.localStorage.getItem("holiday"))

    const saturdayOut = document.querySelector("#sat_day-ot")
    saturdayOut.value = JSON.parse(this.localStorage.getItem("saturday"))

    const sundayOut = document.querySelector("#sun_day-ot")
    sundayOut.value = JSON.parse(this.localStorage.getItem("sunday"))

    const weekdayOut = document.querySelector("#wk_day-ot")    
    weekdayOut.value = JSON.parse(this.localStorage.getItem("weekday"))

   
}

function allowOut(){
    const listAllow = {
        canteen: 360.00,
        discomfort:0.15
    }

    const canteenOut = document.querySelector("#cant-all")
    canteenOut.value = listAllow.canteen.toFixed(2)

    const discOut = document.querySelector("#discom")
    const salOut = document.getElementById('sal-sum').value
    let discomf =  listAllow.discomfort * salOut
    discOut.value = discomf.toFixed(2)

    statutoryDed(salOut)
    
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
        provident: 0.18,
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
        second: 0.01,
        third: 0.15,
        fourth: 0.175,
        fifth: 0.25,
        sixth: 0.3
    }

    let callTax = 0;

    if (taxableOut <= 288){
        callTax = 0;
    }else if (taxableOut > 388){
        let taxCall = taxableOut - 288;
        callTax = taxCall * taxRate.second
    }else if (taxableOut > 528) {
        taxCall = taxableOut - 388
        callTax = taxCall * taxRate.third
        
    }else if (taxableOut > 3528) {
        taxCall = taxableOut - 3000
        callTax = taxCall * taxRate.fourth
        
    }else if (taxableOut > 20000) {
        taxCall = taxableOut - 16472
        callTax = taxCall * taxRate.fifth        
    }else if (taxableOut > 30000) {
        taxCall = taxableOut - 16472
        callTax = taxableOut * taxRate.sixth
    }

    taxOutded.value = callTax.toFixed(2)        
    
}

function net(){
    const stats = document.querySelectorAll("#stat_ded")
    const netOut = document.querySelector("#take")

    let sum = 0;

    stats.forEach(function (stat){
        sum += parseInt(stat.value)||0

    })
    console.log(sum)
}









