var a = document.querySelector("#shedA").value;
var b = document.querySelector("#shedB").value;
var c = document.querySelector("#shedC").value;
var d = document.querySelector("#shedD").value;

function totalProduction(){
    var sellingPrice = 45;
    var sum = total();
    document.getElementById("sum").innerHTML = sum;
    document.getElementById("week").innerHTML = periodicalEarnings(sum, sellingPrice, "week");
    document.getElementById("month").innerHTML = periodicalEarnings(sum, sellingPrice, "month");
    document.getElementById("annual_leap").innerHTML = periodicalEarnings(sum, sellingPrice, "annual_leap");
    document.getElementById("opensesame").innerHTML = leapYearRevenues(sum, leapYear, sellingPrice, "opensesame")
}

function total(){
    var a = parseInt(document.querySelector("#shedA").value);
    var b = parseInt(document.querySelector("#shedB").value);
    var c = parseInt(document.querySelector("#shedC").value);
    var d = parseInt(document.querySelector("#shedD").value);
    var sum = a + b + c + d;

    return sum;
}

function periodicalEarnings (sum, sellingPrice, period){
    var estimatedEarnings = 0;
    if(period === "week") {
        estimatedEarnings = sum * sellingPrice * 7;   
    }
    else if(period === "month") {
        estimatedEarnings = sum * sellingPrice * 30.5;
    }
    else {
        estimatedEarnings = sum * sellingPrice * 366;
    }
    return estimatedEarnings;
}




var leapYear = [{month:"January", days:31}, {month:"February", days:29}, {month:"March", days:31}, {month:"April", days:30}, {month:"May", days:31}, {month:"June", days:30}, {month:"July", days:31}, {month:"August", days:31}, {month:"September", days:30}, {month:"October", days:31}, {month:"November", days:30}, {month:"December", days:31}];


var row = 1
function leapYearRevenues(sum, leapYear, sellingPrice) {
    var monthlyRevenues = 0;
    for (var i=0; i<leapYear.length; i++) {
        monthlyRevenues = sum * leapYear[i].days * sellingPrice;
        return;
    }

    var revenue = [];
    revenue.push({month:"January", earnings: total[0]}, {month:"February", earnings: total[1]}, {month:"March", earnings: total[2]}, {month:"April", earnings: total[3]}, {month:"May", earnings: total[4]},
    {month:"June", earnings: total[5]}, {month:"July", earnings: total[6]}, {month:"August", earnings: total[7]}, {month:"September", earnings: total[8]}, {month:"October", earnings: total[9]}, 
    {month:"November", earnings: total[10]}, {month:"December", earnings: total[11]});
    let length = revenues.length;
    let monthlyTotal = 0;
    for(let i = 0; i<length; i++) {
        monthlyTotal+=revenue[i].earnings;
        var display = document.getElementById("opensesame");
        var newRow = display.insertRow(row);
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);

        cell1.innerHTML = revenue[i].month;
        cell2.innerHTML = revenue[i].earnings;
        row++;
    }
    return monthlyTotal;
}





