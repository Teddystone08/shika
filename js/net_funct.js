const salaryEl = document.getElementById('basic')
const salary = salaryEl.value
const ashiftEl = document.getElementById('ashift')
const Afternoon = ashiftEl.value
const nshiftEl = document.getElementById('nshift')
const night = nshiftEl.value
const hdayEl = document.getElementById('hday')
const holiday = hdayEl.value
const sat_otEl = document.getElementById('Sat_day')
const saturday = sat_otEl.value
const sun_otEl = document.getElementById('sun_day')
const sunday = sun_otEl.value
const wk_otEl = document.getElementById('wk_day')
const weekday = wk_otEl.value
const loanSelect = document.getElementById('option')
const loanType = loanSelect.value
const loan_amount = document.getElementById('lamt')
const amount = loan_amount.value
const loan_date = document.getElementById('ldate')
const date = loan_date.value
const loan_period = document.getElementById('period')
const period = loan_period

//buttons
const btnSub = document.querySelector('.btn_sub')

let myStorage = []


btnSub.addEventListener('click', () => {
    if(salary == '' || salary == 0) {        
        alert('Provide salary')
    }else{
        myStorage.push(salaryEl.value)
        localStorage.setItem("salary", JSON.stringify(myStorage))

        if(Afternoon){
            myStorage.push(Afternoon)
            localStorage.setItem("afternoon", JSON.stringify(myStorage))
        }

        if(night){
            myStorage.push(night)
            localStorage.setItem("night", JSON.stringify(myStorage))
        }

        if(holiday){
            myStorage.push(holiday)
            localStorage.setItem("holiday",JSON.stringify(myStorage))
        }

        if(saturday){
            myStorage.push(saturday)
            localStorage.push(statusbar)
            localStorage.setItem("saturday",JSON.stringify(myStorage))
        }
        console.log(myStorage)
    }



       
})

    //     if(ashiftEl ){
    //         myStorage.push(ashiftEl.value)
    //         localStorage.setItem("Afternoon", JSON.stringify(myStorage))
    //     }
    //      console.log(myStorage)
    
    //    if(nshiftEl){
    //     myStorage.push(nshiftEl.value)
    //     localStorage.setItem("Night", JSON.stringify(myStorage))
    
    //    }
    
    //    if(hdayEl){
    //     myStorage.push(hdayEl.value)
    //     localStorage.setItem("Holiday", JSON.stringify(myStorage))
    
    //    }
    
    //    if(sat_otEl){
    //     myStorage.push(sat_otEl.value)
    //     localStorage.setItem("Saturday", JSON.stringify(myStorage))
    //    }
        
    //    if(sun_otEl){
    //     myStorage.push(sun_otEl.value)
    //     localStorage.setItem("Sunday", JSON.stringify(myStorage))
    //    }
    
    //    if(wk_otEl){
    //     myStorage.push(wk_otEl.value)
    //     localStorage.setItem("Weekday", JSON.stringify(myStorage))
    //    }
    
    //    if(loanSelect== true){
    //     myStorage.push(loanSelect.value)
    //     localStorage.setItem("typeSelect", JSON.stringify(myStorage))
    //    }
    
    //    if(loan_amount){
    //     myStorage.push(loan_amount.value)
    //     localStorage.setItem("lamt", JSON.stringify(myStorage))
    //    }
    
    //    if(loan_date){
    //     myStorage.push(loan_date.value)
    //     localStorage.setItem("idate", JSON.stringify(myStorage))
    //    }
    
    //    if(loan_period){
    //     myStorage.push(loan_period.value)
    //     localStorage.setItem("period", JSON.stringify(myStorage))
    // }
        
   
  // }
//    console.log(myStorage)
//    location.href = "summary.html"
    
 //});

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