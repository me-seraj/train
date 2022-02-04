$(() => {
    // set the select-2 to all select-box
    $("#country").select2();
    $("#state").select2();
    $("#city").select2();

    // DOB select date age > 18+
    var today = new Date();
    today.setFullYear(new Date().getFullYear() - 18);
    $("#dob").datepicker({
        changeMonth: true,
        changeYear: true,
        maxDate: today
    });

    // salary slider
    $(".salary").slider({
        value: 10,
        min: 0,
        max: 1000,
        slide: (e, ui) => {
            $(".val-sal").text("Per Annum : " + ui.value + "K");
        }
    });
    $(".val-sal").text("Per Annum : " + $(".salary").slider("value") + "K");

    // favourite movie multi-select
    $("#fav-movie").select2({
        minimumSelectionLength: 2
    });
})