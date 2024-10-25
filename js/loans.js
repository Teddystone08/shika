window.addEventListener('load', () => {
dropDown();
const btnSwitchNet = document.getElementById('btn_net');
const btnSwitchLoan = document.getElementById('btn_loan');
const btnSubmit = document.getElementById('btn_submit');


   const selectItems = document.getElementById('option') 
   selectItems.forEach(selectItem => {
      console.log(selectItem)
      
   });
   



btnSwitchNet.addEventListener('click', function() {
    location.href = "net_cal.html"
  
   
 })

 btnSwitchLoan.addEventListener('click', function() {
    location.href = "loan_cal.html"
 } )

   



})



