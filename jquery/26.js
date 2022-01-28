$(document).ready(() => {
    $("input[type=submit").on("click", () => {
        
        $("input[type=text]").each((i, obj) => {
            if($(obj).val().search("world") >= 0) $(obj).addClass("found");
        })

    })
})