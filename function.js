var shedA = 510, shedB = 308, shedC = 486, shedD = 572; 

    console.log("Your production in shed A is"+' '+shedA+' '+"litres per day");
    console.log("Your production in shed B is"+' '+shedB+' '+"litres per day");
    console.log("Your production in shed C is"+' '+shedC+' '+"litres per day");
    console.log("Your production in shed D is"+' '+shedD+' '+"litres per day");

x = totalProduction(510, 308, 486, 572);
    function totalProduction() {
        var i;
        var sum = 0;
        for (i = 0; i<arguments.length; i++) {
            sum += arguments[i];
        }
        console.log("The total production is"+' '+sum+' '+"litres per day.");
}