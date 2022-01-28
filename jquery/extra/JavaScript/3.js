var counter = document.querySelector(".counter");
var words = document.querySelector(".words");
var count = document.querySelector("#count");
var texts = document.querySelector("#texts");

texts.addEventListener("keyup", () => {
    counter.textContent = "Ramaining " + texts.value.length + "/" + count.value;
    words.textContent = "Total words : " + texts.value.split(" ").length;

    if(texts.value.length >= parseInt(count.value)){
        texts.style.backgroundColor = "red";
        texts.style.color = "#fff";
    }
})