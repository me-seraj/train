$(document).ready(() => {
    $(".fade").on("mouseover", (obj) => {
        $(obj.target).fadeOut(3000);
    })
    $(".fade").on("mouseout", (obj) => {
        $(obj.target).fadeIn(3000);
    })

    $(".hide").on("mousedown", (obj) => {
        $(obj.target).hide();
    })

    $(".hide").on("mouseleave", (obj) => {
        $(obj.target).hide();
        $("button").css("display", "block");
    })

    $("button").on("click", (obj) => {
        $(".hide").show();
        $(obj.target).css("display", "none");
    })
})