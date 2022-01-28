$(document).ready(() => {
    $(".add").on("click", () => {
        $("#container_id").addClass("added");
    })

    $(".rem").on("click", () => {
        $("#container_id").removeClass("added");
    })

})