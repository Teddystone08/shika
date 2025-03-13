const btn_deduct = document.querySelector(".radio_gtp")
const btn_overtime = document.querySelector(".radio_ot")

$(".radio_gtp").on("click", function() {
    $(".gpea-cont").css("display", "block");
    $(".loan_sec").css("display", "none");
});