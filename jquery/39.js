$(() => {
    $(".popImg").magnificPopup({
        delegate: "a",
        type: "image",
        gallery: {
            enabled: true
        }
    })
})