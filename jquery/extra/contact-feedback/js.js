$(() => {
    $(".tabs").tabs();

    $('.carousel').flickity({
        // options here
        autoPlay: 3000,
        friction: 0.4,
        prevNextButtons: true,
        resize: true,
        rightToLeft: false,
        watchCSS: false,
    });

    // $("#country").selectmenu();

    $("#datepick").datepicker();

    $(".slider").slider({
        value: 4,
        min: 0,
        max: 10,
        slide: (e, ui) => {
            $(".val").html("Rating : <b>" + ui.value + "</b>");
        }
    });
    $(".val").html("Rating : <b>" + $(".slider").slider("value") + "</b>");
})