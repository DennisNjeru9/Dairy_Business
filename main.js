var a = document.querySelector("shedA").value;
var b = document.querySelector("shedB").value;
var c = document.querySelector("shedC").value;
var d = document.querySelector("shedD").value;

function add(){
    var a = parseInt(document.querySelector("shedA").value);
    var b = parseInt(document.querySelector("shedB").value);
    var c = parseInt(document.querySelector("shedC").value);
    var d = parseInt(document.querySelector("shedD").value);
    var totalProduction = a + b + c + d;
    document.getElementById("totalProduction").innerHTML = sum;

    return totalProduction;
}




let milkPricePerLitre = 45;
let production = add();
var monthlyEarnings = [{month:"January", days:31}, {month:"February", days:29}, {month:"March", days:31}, {month:"April", days:30}, {month:"May", days:31},
                        {month:"June", days:30}, {month:"July", days:31}, {month:"August", days:31}, {month:"September", days:30}, {month:"October", days:31}, 
                        {month:"November", days:30}, {month:"December", days:31}];

function revenues() {
    var total = 0;
    for (var i=0; i<monthlyEarnings.length; i++){
        total = totalProduction * monthlyEarnings * milkPricePerLitre;
        document.getElementById("")
    }
    return total;
}


