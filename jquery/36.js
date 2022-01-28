$(() => {
    $(".slider").slider({
        value: 10,
        slide: (e, ui) => {
            $(".val").text("Value : " + ui.value);
        }
    });
    $(".val").text("Value : " + $(".slider").slider("value"));



    $(".range").slider({
        range: true,
        min: 0,
        max: 500,
        values: [50, 120],
        slide: (e, ui) => {
            $(".vals").text("Range : " + ui.values[0] + " - " + ui.values[1]);
        }
    })
    $(".vals").text("Range : " + $(".range").slider("values", 0) + " - " + $(".range").slider("values", 1));


    $(".disable").slider();
    $(".disable").slider("disable");
    
})