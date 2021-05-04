var a = document.querySelector("shedA").value;
var b = document.querySelector("shedB").value;
var c = document.querySelector("shedC").value;
var d = document.querySelector("shedD").value;

function add(){
    var a = parseInt(document.querySelector("shedA").value);
    var b = parseInt(document.querySelector("shedB").value);
    var c = parseInt(document.querySelector("shedC").value);
    var d = parseInt(document.querySelector("shedD").value);
    var sum = a + b + c + d;
    document.getElementById("sum").innerHTML = sum;
}

