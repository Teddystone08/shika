function discomfort(){
    dcom = basic * 15%
    (dcom)
}

function after_shift(){
    a_shift = (basic * 3.5 * after)/432.5
    return a_shift;
}
 function night_shift(){
    n_shift = (basic * 3.5 * night)/216.24
    return n_shift;
 }

 function ot_wkday(){
    wd_ot = (basic * wk)/173
    return wd_ot;
 }

 function ot_holiday() {
    h_ot = (basic * hday)/173 * 2
    return h_ot;

 }

 function ok_clear(){
   $(document).ready(function(){
      $("button").click(function (e) { 
         $("results").remove(".output");
         e.preventDefault();
         
      });
   })
 }

 





