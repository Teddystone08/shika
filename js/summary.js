
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
    getOtheAllow()
      
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

function getOtheAllow() {
    const canteenOut = document.querySelector("#cant-all")
    const statAllow = {
        Canteen: 360,
        Discomfort: 12/100

    }

    let canteenSum = statAllow.Canteen
    canteenOut.value = canteenSum.toFixed(2)

    const discomfortOut = document.querySelector("#discom")
    let discomfort = statAllow.Discomfort * salOut.value
    discomfortOut.value = discomfort.toFixed(2)



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

