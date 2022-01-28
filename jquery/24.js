$(document).ready(function(){
    $("form input").addClass("input-control");

    $(".input-control").on("mouseover", function(){
        this.focus();
    });
})