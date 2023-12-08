const salOut = document.querySelector("#sal-sum")
const aftetnoonOut = document.querySelector("#ashift-all")
const nightOut = document.querySelector("#nshift-all")
const holidayOut = document.querySelector("#hday-ot")
const saturdayOut = document.querySelector("#sat_day-ot")
const sundayOut = document.querySelector("#sun_day-ot")
const weekdayOut = document.querySelector("#wk_day-ot")

window.addEventListener("load", function(){
    salOut.value = JSON.parse(this.localStorage.getItem("salary"))
    aftetnoonOut.value = JSON.parse(this.localStorage.getItem("afternoon"))
    nightOut.value = JSON.parse(this.localStorage.getItem("night"))
    holidayOut.value = JSON.parse(this.localStorage.getItem("holiday"))
    saturdayOut.value = JSON.parse(this.localStorage.getItem("saturday"))
    sundayOut.value = JSON.parse(this.localStorage.getItem("sunday"))
    weekdayOut.value = JSON.parse(this.localStorage.getItem("weekday"))

    
})
