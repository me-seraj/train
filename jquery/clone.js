$(document).ready(() => {
    $(".clone").on("click", () => {
        $("div").append($("p").clone());
    })
})