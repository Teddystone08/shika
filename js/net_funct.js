const salaryEl = document.getElementById('basic')
const ashiftEl = document.getElementById('ashift')
const nshiftEl = document.getElementById('nshift')
const hdayEl = document.getElementById('hday')
const sat_otEl = document.getElementById('Sat_day')
const sun_otEl = document.getElementById('sun_day')
const wk_otEl = document.getElementById('wk_day')
const loanSelect = document.getElementById('option')
const loan_amount = document.getElementById('lamt')
const loan_date = document.getElementById('ldate')
const loan_period = document.getElementById('period')



//buttons
const btnSub = document.querySelector('.btn_sub')

let myStorage = []


btnSub.addEventListener('click', () => {
    if(salaryEl != 0 || salaryEl != null) {
        myStorage.push(salaryEl.value)
        localStorage.setItem("Salary", JSON.stringify(myStorage))
    }else{
        alert('Please provide Salary')
    }

    if(ashiftEl ){
        myStorage.push(ashiftEl.value)
        localStorage.setItem("Afternoon", JSON.stringify(myStorage))
    }
     console.log(myStorage)

   if(nshiftEl){
    myStorage.push(nshiftEl.value)
    localStorage.setItem("Night", JSON.stringify(myStorage))

   }

   if(hdayEl){
    myStorage.push(hdayEl.value)
    localStorage.setItem("Holiday", JSON.stringify(myStorage))

   }

   if(sat_otEl){
    myStorage.push(sat_otEl.value)
    localStorage.setItem("Saturday", JSON.stringify(myStorage))
   }
    
   if(sun_otEl){
    myStorage.push(sun_otEl.value)
    localStorage.setItem("Sunday", JSON.stringify(myStorage))
   }

   if(wk_otEl){
    myStorage.push(wk_otEl.value)
    localStorage.setItem("Weekday", JSON.stringify(myStorage))
   }

   if(loanSelect== true){
    myStorage.push(loanSelect.value)
    localStorage.setItem("typeSelect", JSON.stringify(myStorage))
   }

   if(loan_amount){
    myStorage.push(loan_amount.value)
    localStorage.setItem("lamt", JSON.stringify(myStorage))
   }

   if(loan_date){
    myStorage.push(loan_date.value)
    localStorage.setItem("idate", JSON.stringify(myStorage))
   }

   if(loan_period){
    myStorage.push(loan_period.value)
    localStorage.setItem("period", JSON.stringify(myStorage))
   }
   console.log(myStorage)
   location.href = "summary.html"
    
});

/*
function inputRules(){

    let salary = " "

    if(salaryEl != " " || salaryEl != 0) {
        salary = Number(salaryEl).toFixed(2)
    }else{
        alert('Please provide salary')
    }

    if(salaryEl === " " && Ashift != " " ){
        alert('Please provide salary')
    } else{
        let afternoon = (salaryEl * 3.5 * Ashift)/435.7

    }
    console.log(afternoon)
}
*/