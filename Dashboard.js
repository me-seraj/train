// var html = document.querySelector("#html");
// var js = document.querySelector("#js");
// var jquery = document.querySelector("#jquery");

// var htmlBody = document.querySelector("#htmlBody");
// var jsBody = document.querySelector("#jsBody");
// var jqueryBody = document.querySelector("#jqueryBody");

// left list
document.querySelectorAll(".left ul li").forEach(e => {

    e.addEventListener("click", () => {
        document.querySelectorAll(".right > div").forEach((e1) => {
            e1.style.display = "none";
        });
    
        document.querySelectorAll(".left .active").forEach((e2) => {e2.classList.remove("active")});

        e.classList.add("active");
        document.querySelector("#" + e.getAttribute("id") + "Body").style.display = "block";
    })
});

// top bar list
document.querySelectorAll(".right .nav .nav-link").forEach(e => {

    e.addEventListener("click", () => {
        
        document.querySelectorAll(".right #accordion > div").forEach((e1) => {
            e1.style.display = "none";
        });
    
        document.querySelectorAll(".right .nav .nav-link").forEach((e2) => {e2.classList.remove("active")});

        e.classList.add("active");

        document.querySelector("#" + e.getAttribute("call") + "").style.display = "block";
    })
});