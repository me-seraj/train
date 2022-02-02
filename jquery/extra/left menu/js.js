$(() => {
    $(".accordion").accordion({
        active: "",
        animate: 800,
        // classes: {
        //     "ui-accordion": "highlight",
        //     "ui-accordion-header": "ui-corner-top",
        //     "ui-accordion-header-collapsed": "ui-corner-all",
        //     "ui-accordion-content": "ui-corner-bottom"
        // },
        collapsible: true,
        // disabled: true,
        // event: "mouseover",
        heightStyle: "content"
    });
    $(".menu-in").accordion();
})