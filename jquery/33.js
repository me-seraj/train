$(document).ready(() => {
    $(".wrapAll").on("click", () => {
        $("p").wrapAll("<div></div>");
    })

    $(".wrap").on("click", () => {
        $("p").wrap("<div></div>");
    })

    $(".wrapIn").on("click", () => {
        $("p").wrapInner("<div></div>");
    })

})