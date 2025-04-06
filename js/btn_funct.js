import { btnSwitchNet, btnSwitchLoan, resetBtn } from './all_selectors.js';

//function for main page buttons

//button listeners for net_cal page
btnSwitchNet.addEventListener('click', function () {
   location.href = "net_cal.html"
})

//button listeners for loan_cal page
btnSwitchLoan.addEventListener('click', function () {
   location.href = "loan_cal.html"
})



resetBtn.addEventListener('click', () => {
   location.href = "net_cal.html";
   localStorage.clear();

})