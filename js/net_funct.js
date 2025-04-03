import { Salary, Afternoon, Night, Holiday, Saturday, Sunday, Weekday } from "./all_selectors.js";
import { loan_btn, deduction_on, overtime_on, association, loanAmt, loanBtn } from "./all_selectors.js";


//listeners for deduction button switch
deduction_on.addEventListener("change", () => {
    if (document.querySelector("#radio_gtp").checked) {
        document.querySelector(".gpea-cont").style.display = "block";
        
    }

});


//listen for overtime button switch
overtime_on.addEventListener("change", () => {
    if (document.querySelector("#radio_ot").checked) {
        document.querySelector(".main_ot").style.display = "block";
    }
});

//lister for loan button switch

loan_btn.onclick = function () {
    if (document.querySelector("#loan").checked) {
        document.querySelector(".loan_data").style.display = "block";
    } 

//submit button

// let myStorage = []
let result = '';


Submit.addEventListener('click', function () {
    

    if (Salary.value == " " || Salary == 0) {
        alert("Provide Basic salary")
    } else {
        //myStorage.push(Salary)
        

        if (Afternoon) {
            result = Math.floor((Afternoon * Salary * 3.5) / 432.5).toFixed(2)
            //myStorage.push(result)
            

        if (Night) {
            result = Math.floor((Night * Salary * 3.5) / 216.24).toFixed(2)
            //myStorage.push(result)
            
        }

        if (Holiday) {
            result = Math.floor((Holiday * Salary) / 173 * 2).toFixed(2)
            //myStorage.push(result)
            
            result = Math.floor((Saturday * Salary) / 173 * 2).toFixed(2)
            //myStorage.push(result)
           
        }
        if (Sunday) {
            result = Math.floor((Sunday * Salary) / 173 * 2).toFixed(2)
            //myStorage.push(result)
            
        if (Weekday) {
            result = Math.floor((Weekday * Salary) / 173).toFixed(2)
            //myStorage.push(result)
            
        }


        if (association == true) {
            result = gp.toFixed(2)
            // myStorage.push(result)
            

        if (loanBtn == true && loanAmt !== "" || 0) {

            let oP = optBtn
            //myStorage.push(oP)
            

            let loan_req = loanAmt.toFixed(2)
            //myStorage.push(loan_req)
            
            let dur = durData
            //myStorage.push(dur, )
            


        }

        location.href = "summary.html"
}
        
});
