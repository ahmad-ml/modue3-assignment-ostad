function checkPrime() {
    var number = parseInt(document.getElementById('inputNumber').value);
    
    if (isPrime(number)) {
        document.getElementById('result').innerHTML = number + " is a prime number.";
    } else {
        document.getElementById('result').innerHTML = number + " is not a prime number.";
    }
}

function isPrime(number) {
    if (number <= 1) {
        return false;
    }

    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}
