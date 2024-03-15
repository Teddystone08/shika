
//construct input variables//


window.addEventListener("load", function(){
    setVariable()
    getGross()
    getOtheAllow()
    statutoryDed()
    taxableGross()
   
      
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

function getOtheAllow() {
        const statAllow = {
        Canteen: 360,
        Discomfort: 12/100

    }

    const canteenOut = document.querySelector("#cant-all")
    let canteenSum = statAllow.Canteen
    canteenOut.value = canteenSum.toFixed(2)

    
    const discomfortOut = document.querySelector("#discom")
    let discomfort = statAllow.Discomfort * salOut
    discomfortOut.value = discomfort.toFixed(2)
    

}

function getGross() {
    const inputVals = document.querySelectorAll(".bs_input")

    let sum = 0

    inputVals.forEach(function (inputVal) {
        sum += parseInt(inputVal.value)||0

    const grossSum = document.querySelector("#sum")
    grossSum.value = sum.toFixed(2)

    }) 

    taxableGross(sum)
  
}

function statutoryDed(){
    const statDeduct = {
        ssnit: 0.055,
        provident: 0.18,
        union_dues:  0.01,
        canteen: 300

    }
    let ssnit = 0;
    let pf = 0;
    let canteen = 0
    let union = 0

    const ssnitOut = document.querySelector("#ssnit-ded")
    const salOut = document.querySelector("#sal-sum").value
    ssnit = statDeduct.ssnit * salOut
    ssnitOut.value = ssnit.toFixed(2)
    
    const providentOut = document.querySelector("#pf")
    pf = statDeduct.provident * salOut
    providentOut.value = pf.toFixed(2)
    

    const canteendedOut = document.querySelector("#cant-all")
    canteen = statDeduct.canteen.toFixed(2)
    canteendedOut.value = canteen
    

    const unionDuesOut = document.querySelector("#union-ded")
    union = statDeduct.union_dues * salOut
    unionDuesOut.value = union.toFixed(2)

    taxableGross(ssnit, pf)
    

}


const taxable = document.querySelector("#gross-ded")

console.log(taxableGross())



