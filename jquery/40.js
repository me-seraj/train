$(() => {
    $(".pos_abs").draggable();
    $(".pos_abs_stick").draggable();

    setInterval(() => {
        $(".pos_abs").each((obj) => {
            $(obj).css("top", (parseInt($(obj).css("top"))-10) + "px");
        })
    }, 1000);
})