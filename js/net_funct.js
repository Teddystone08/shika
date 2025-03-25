

//listeners for deduction button switch
ded_on.addEventListener("change", () => {
    if (document.querySelector("#radio_gtp").checked) {
        document.querySelector(".gpea-cont").style.display = "block";
        document.querySelector(".loan_sec").style.display = "block";
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
    } else {
        document.querySelector(".loan_data").style.display = "none";
    }

};


//submit button
const Submit = document.querySelector(".btn_sub")

// let myStorage = []
let result = '';


Submit.addEventListener('click', function () {
    const Salary = document.querySelector(".bs_input1").value
    

    if (Salary == " " || Salary == 0) {
        alert("Provide Basic salary")
    } else {
        //myStorage.push(Salary)
        localStorage.setItem("salary", JSON.stringify(Salary))

        if (Afternoon) {
            result = Math.floor((Afternoon * Salary * 3.5) / 432.5).toFixed(2)
            //myStorage.push(result)
            localStorage.setItem("afternoon", JSON.stringify(result))
        }

        if (Night) {
            result = Math.floor((Night * Salary * 3.5) / 216.24).toFixed(2)
            //myStorage.push(result)
            localStorage.setItem("night", JSON.stringify(result))
        }
        if (Holiday) {
            result = Math.floor((Holiday * Salary) / 173 * 2).toFixed(2)
            //myStorage.push(result)
            localStorage.setItem("holiday", JSON.stringify(result))
        }
        if (Saturday) {
            result = Math.floor((Saturday * Salary) / 173 * 2).toFixed(2)
            //myStorage.push(result)
            localStorage.setItem("saturday", JSON.stringify(result))
        }
        if (Sunday) {
            result = Math.floor((Sunday * Salary) / 173 * 2).toFixed(2)
            //myStorage.push(result)
            localStorage.setItem("sunday", JSON.stringify(result))
        }
        if (Weekday) {
            result = Math.floor((Weekday * Salary) / 173).toFixed(2)
            //myStorage.push(result)
            localStorage.setItem("weekday", JSON.stringify(result))
        }


        if (gp) {
            result = gp.toFixed(2)
            // myStorage.push(result)
            localStorage.setItem("contribution", JSON.stringify(result))
        }

        if (loanBtn == true && loanAmt !== "" || 0) {

            let oP = optBtn
            //myStorage.push(oP)
            localStorage.setItem("optBtn", JSON.stringify(oP))

            let loan_req = loanAmt.toFixed(2)
            //myStorage.push(loan_req)
            localStorage.setItem("request", JSON.stringify(loan_req))

            let dur = durData
            //myStorage.push(dur, )
            localStorage.setItem("period", JSON.stringify(dur))


        }

        location.href = "summary.html"
    }


});

