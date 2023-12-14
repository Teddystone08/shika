
//construct input variables//
const salOut = document.querySelector("#sal-sum")
const aftetnoonOut = document.querySelector("#ashift-all")
const nightOut = document.querySelector("#nshift-all")
const holidayOut = document.querySelector("#hday-ot")
const saturdayOut = document.querySelector("#sat_day-ot")
const sundayOut = document.querySelector("#sun_day-ot")
const weekdayOut = document.querySelector("#wk_day-ot")

window.addEventListener("load", function(){
    setVariable()
    getGross()
    
    
})


function setVariable() {
    salOut.value = JSON.parse(this.localStorage.getItem("salary"))
    aftetnoonOut.value = JSON.parse(this.localStorage.getItem("afternoon"))
    nightOut.value = JSON.parse(this.localStorage.getItem("night"))
    holidayOut.value = JSON.parse(this.localStorage.getItem("holiday"))
    saturdayOut.value = JSON.parse(this.localStorage.getItem("saturday"))
    sundayOut.value = JSON.parse(this.localStorage.getItem("sunday"))
    weekdayOut.value = JSON.parse(this.localStorage.getItem("weekday"))
    


}

function getGross() {
    const inputVals = document.querySelectorAll(".bs_input")

    let sum = 0

    inputVals.forEach(function (inputVal) {
        sum += parseInt(inputVal.value)||0

    })
    const groosSum = document.querySelector("#sum")
    groosSum.value = sum.toFixed(2)
    

    
    


   
}