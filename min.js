function min(numbers) {

    var minmum = numbers[0];

    for (var i = 1; i <= numbers.length; i++) {

        if (numbers[i] < minmum) {

            minmum = numbers[i]
        }



    }

    return minmum;
}

console.log(min([2, 1, -8, 6]));
