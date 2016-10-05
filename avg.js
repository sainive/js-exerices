function average(numbers) {
    var avg = numbers[0];

    for (var i = 1; i < numbers.length; i++) {

        avg = avg + numbers[i];
    }

    return avg / numbers.length;
}

average([1, 2, 3, 7]);
