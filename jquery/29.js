$(document).ready(() => {
    $("button").on("click", (obj) => {
        alert($(obj.target).text())
    })
})