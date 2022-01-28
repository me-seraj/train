function valid() {
    var text = $("input[type = text]");
    var pass = $("input[type = password]");
    var check = $("input[type = checkbox]");
    var rad = $("input[type = radio]");
    var sel = $("select");

    if (text.val() == "") { text.focus(); $(".err-text").css("display", "block") }
    else {
        $(".err-text").css("display", "none");
        if (pass.val() == "") { pass.focus(); $(".err-pass").css("display", "block") }
        else {
            $(".err-pass").css("display", "none");
            if (!rad.prop("checked")) {$(".err-rad").css("display", "block");}
            else {
                $(".err-rad").css("display", "none");
                if (!check.prop("checked")) $(".err-check").css("display", "block");
                else {
                    $(".err-check").css("display", "none");
                    if(sel.val() == null) $(".err-sel").css("display", "block");
                    else{ $(".err-sel").css("display", "none"); alert("Submit Successfully..")}
                }
            }
        }
    }
}