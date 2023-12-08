const Submit = document.querySelector('.btn_sub')

let myStorage = []
let result = '';

Submit.addEventListener('click', function(){   
    const Salary = document.querySelector(".bs_input1").value
    const Afternoon = document.querySelector("#ashift").value
    const Night = document.querySelector("#nshift").value
    const Holiday = document.querySelector("#hday").value
    const Saturday = document.querySelector("#sat_day").value
    const Sunday = document.querySelector("#sun_day").value
    const Weekday = document.querySelector("#wk_day").value
    const loanRadio = document.querySelector(".radio").value
    const loanDiv = document.querySelector(".loan_sec")
    const loan = document.querySelector(".loan_data")

    if(Salary == " " || Salary== 0){
        alert("Provide Basic salary")   
    }else{
        myStorage.push(Salary)
        localStorage.setItem("salary",JSON.stringify(Salary))

        if(Afternoon){
            result = Math.floor((Afternoon * Salary * 3.5)/432.5).toFixed(2)
            myStorage.push(result)
            localStorage.setItem("afternoon", JSON.stringify(result))
        }

        if(Night){
            result = Math.floor((Night * Salary * 3.5)/216.24).toFixed(2)
            myStorage.push(result)
            localStorage.setItem("night", JSON.stringify(result))
        }
        if(Holiday){
            result = Math.floor((Holiday * Salary)/173 * 2).toFixed(2)
            myStorage.push(result)
            localStorage.setItem("holiday", JSON.stringify(result))
        }
        if(Saturday){
            result = Math.floor((Saturday * Salary)/173 * 2).toFixed(2)
            myStorage.push(result)
            localStorage.setItem("saturday", JSON.stringify(result))
        }
        if(Sunday){
            result = Math.floor((Sunday * Salary)/173 * 2).toFixed(2)
            myStorage.push(result)
            localStorage.setItem("sunday", JSON.stringify(result))
        }
        if(Weekday){
            result = Math.floor((Weekday * Salary)/173).toFixed(2)
            myStorage.push(result)
            localStorage.setItem("weekday", JSON.stringify(result))
        }

        if(loanRadio == true){
            loanDiv = 
            loan = true
        }
        location.href = "summary.html"
    }




    console.log(result)
    console.log(myStorage)
   


})
