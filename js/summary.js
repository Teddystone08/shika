const salDis = document.getElementById('sal-sum')


const sumDisplay = document.querySelector('.container')




window.addEventListener("load", function() {
   sumDisplay.innerHTML = `
   <p>
   <h4>Net Summary</h4>   
   </p>

   <div class="basic" id="sal">
   <p>
   <label for="sal-sum">Basic Salary:</label>
   <input class="bs_input1" id="sal-sum"  >
   </p>
</div>

<div class="main_allow" id="allow_input">
   <p >
       <label for="ashift-all">Afternoon Allowance:</label>
       <input class="bs_input" id="ashift-all" readonly>
   </p>
   <p >
       <label for="cant-all">Canteen Allowance:</label>
       <input class="bs_input" id="cant-all" readonly>
   </p>
   <p >
       <label for="discom">Discomfort Allowance:</label>
       <input class="bs_input" id="discom" readonly>
   </p>
   <p>
       <label for="nshift-all">Night Allowance:</label>
       <input class="bs_input" id="nshift-all" readonly>
   </p>
            
</div>

<div class="main_ot" id="day_ot">
   <p>
       <label for="hday-ot">Holiday OverTime:</label>
       <input class="bs_input" id="hday-ot" readonly>
   </p>
   <p>
       <label for="Sat_day-ot">Saturday OverTime:</label>
       <input class="bs_input" id="Sat_day-ot" readonly>
   </p>
   <p>
       <label for="sun_day-ot">Sunday OverTime:</label>
       <input class="bs_input" id="sun_day-ot" readonly>
   </p>
   <p>
       <label for="wk_day-ot">Weekday OverTime:</label>
       <input class="bs_input" id="wk_day-ot" readonly>
   </p>
   
</div>
<div>
<p>
<label for="sum">Gross income:</label>
<input readonly class = "gross" id="sum">
</p>
</div>
<div class="sat"

<p>
    <label for="cant">Canteen:</label>
    <input readonly class="cant-fee" id="cant">
</p>

<p>
    <label for="ssnit-ded">Ssnit:</label>
    <input readonly class="ssnit" id="ssnit-ded">
</p>

<p>
    <label for="pf">Provident Fund:</label>
    <input readonly class="pf-ded" id="pf">
</p>
<p>
<label for="union-ded">Union Dues:</label>
<input readonly class = "dues" id = "union-ded">
</p>
<p>
<label for="union">Monthly Contribution(Gtpea):</label>
<input readonly class = "dues" id = "union">
</p>


</div>

   <div class="loan_select">
       <label for="select">Load Type:</label>
       <input class = "select" id = "select" readonly>
   </div>

   <div class="loan_data">

        <p>
           <label for="lamt-sum">Amount:</label>
           <input class="loan" id="lamt-sum" readonly>
       </p>
        <p>
           <label for="lamt-p">Duration</label>
           <input class="loan" id="lamt-p" readonly>
       </p>
       <p>
           <label for="C-int">Current Interest:</label>
           <input id="C-int" class="loan" readonly>
       </p>
       <p>
           <label for="amt-paid">Total amount paid:</label>
           <input class="loan" id="amt-paid" readonly>
       </p>
       <p>
           <label for="int-loan">Total Interest paid:</label>
           <input class="loan" id="int-loan" readonly>
       </p>
       <p>
           <label for="left">Balance:</label>
           <input class="loan" id="left" readonly>
       </p>


   </div>

   <P>
   <label for="take">Net:</label>
   <input readonly class="net" id="take">
   
   </P>
   <button class = btnOk>Ok</button>
   ` 
  const salary = this.localStorage.getItem("Salary")
  salDis.i
    
    
  }
  
  

})






