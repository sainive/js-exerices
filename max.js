function maxi(numbers) {

    var maximum = numbers[0];

    for (var i = 1; i <= numbers.length; i++) {

        if (numbers[i] > maximum) {

            maximum = numbers[i]
        }



    }

    return maximum;
}

console.log(maxi([2, 1, 8, 6]));
