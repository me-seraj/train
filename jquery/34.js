$(document).ready(() => {
    $("button.insAft").on("click", () => {
        $("<b>Insert after p tag</b>").insertAfter("p");
    })

    $("button.insBef").on("click", () => {
        $("<b>Insert after p tag</b>").insertBefore("p");
    })

    $("button.aft").on("click", () => {
        $("p").after("<b>Insert after p tag</b>");
    })

    $("button.bef").on("click", () => {
        $("p").before("<b>Insert after p tag</b>");
    })
});