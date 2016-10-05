function fizzBuzz(countTo) {

    for (var i = 0; i <= countTo.length; i++) {


        if (countTo[i] % 3 == 0 && countTo[i] % 5 == 0) {
            console.log("fizzbuzz");
        } else if (countTo[i] % 5 == 0) {
            console.log("Bizz");
        } else if (countTo[i] % 3 == 0) {

            console.log("fizz");
        }
    }
}


fizzBuzz([3, 5, 15, 30, 45]);
