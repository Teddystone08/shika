//buttons for dashboard functions


window.addEventListener('load', () => {
    dropDown();
    const btnSwitchNet = document.getElementById('btn_net');
    const btnSwitchLoan = document.getElementById('btn_loan');
    const btnSubmit = document.getElementById('btn_submit');
    
    
       const selectItems = document.getElementById('option') 
       selectItems.forEach(selectItem => {
          console.log(selectItem)
          
       });
       
    
    
    //function for main page buttons

    //button listeners for net_cal page
     btnSwitchNet.addEventListener('click', function() {
        location.href = "net_cal.html"
     })
    
     //button listeners for loan_cal page
     btnSwitchLoan.addEventListener('click', function() {
        location.href = "loan_cal.html"
     })
    
       
    
    
    
    })
    