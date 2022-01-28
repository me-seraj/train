var inputarr;
var tsum;
var count;

function myFunction() {
    inputarr = document.querySelector("#myText").value;
    inputarr = inputarr.split(",");

    mysort(inputarr);
    mydistinct(inputarr);
    mysum(inputarr);
    myavg();
}

function mysort(inputarr) {
    var x = inputarr.sort(function (a, b) {
        return a - b;
    });
    document.getElementById("sort").innerHTML = "sort of array is: " + x;

}

function mydistinct(input_arr) {
    var new_arr = [];
    input_arr.forEach(element => {
        if (new_arr.indexOf(element) === -1) {
            new_arr.push(element);
        }
    });
    document.getElementById("dist").innerHTML = "distinct element  of array is: " + new_arr;
    inputarr = new_arr;
}

function mysum(inputarr) {
    var sum = 0;
    count = 0;
    for (var i = 0; i < inputarr.length; i++) {
        count++;
        sum += parseInt(inputarr[i]);
    }
    document.getElementById("sum").innerHTML = "sum of  distinct element in array is: " + sum;

    tsum = sum;
}
function myavg() {
    var avg = tsum / count;
    document.getElementById("avg").innerHTML = "average of distinct element of array is: " + avg;

}