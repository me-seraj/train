$(() => {
    setInterval(() => {
        var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijkllmnopqrstuvwxyz1234567890+-!@#$%^&*()_;\'[]/.,\\{}|:\"?<<`~";
        var max = chars.length;
        var maxWidth = $(window).width() - 100;
        var maxHeight = $(window).height() - 100;

        var randKey = chars.charAt(Math.floor(Math.random() * (max + 1)));
        var randWidth = Math.floor(Math.random() * (maxHeight + 1));
        var randHeight = Math.floor(Math.random() * (maxWidth + 1));
        $(".game").append('<div class="letter key' + randKey.charCodeAt(0) + '" style="top: ' + randWidth +'px; left: ' + randHeight + 'px;">' + randKey + '</div>');
        
        $(".letter").draggable();
    }, 2000)
    
    $(window).bind("keypress", (e) => {
        if($(".key" + e.which)[0]){
            $(".key" + e.which).hide();
        }
    })
    $(document).dblclick(".letter", (e) => {
        $(e.target).hide();
    })

    $(".cross").on("click", (e) => {
        $(e.target).parent().hide();
    })
})