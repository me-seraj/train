$(() => {
    $('.carousel').flickity({
        // options here

        // enable keyboard navigation
        accessibility: true,

        // make the carousel's height fit the selected slide
        adaptiveHeight: false,

        // enable auto play
        // set delay time to enable the autoplay
        // e.g. autoPlay: 5000
        autoPlay: 2000,

        // 'center', 'left', or 'right'
        // or a decimal 0-1, 0 is beginning (left) of container, 1 is end (right)
        cellAlign: 'center',

        // cell selector
        cellSelector: undefined,

        // will contain cells to container
        // so no excess scroll at beginning or end
        // has no effect if wrapAround is enabled
        contain: false,

        // enable dragging & flicking when the slides > 1
        draggable: '>1',

        // the number of pixels a user must scroll horizontally to start dragging
        dragThreshold: 3,

        // enable content to be freely scrolled and flicked
        // without aligning cells
        // free<a href = "https://www.jqueryscript.net/tags.php?/Scroll/">Scroll</a>: false,

        // smaller number = easier to flick farther
        friction: 0.2,

        // group cells together in slides
        groupCells: false,

        // enable image lazy load
        // you can specify the original img src in the data-flickity-lazyload attribute
        lazyLoad: true,

        // intial slide
        initialIndex: 0,

        // set positioning in percent values, rather than pixels
        // Enable if items have percent widths
        // Disable if items have pixel widths, like images
        percentPosition: true,

        // enable next/prev buttons
        prevNextButtons: true,

        // enable pagination dots
        pageDots: true,

        // listens to window resize events to adjust size & positions
        resize: true,

        // enable RTL support
        rightToLeft: false,

        // set the height of the gallery
        // set < a href = "https://www.jqueryscript.net/gallery/" > Gallery</a > Size: true,

        // watches the content of :after of the element
        // activates if #element:after { content: 'flickity' }
        // IE8 and <a href="https://www.jqueryscript.net/tags.php?/Android/">Android</a> 2.3 do not support watching :after
        // set watch: 'fallbackOn' to enable for these browsers
        watchCSS: false,

        // at end of cells, wraps-around to first for infinite scrolling
        wrapAround: false
    });
})