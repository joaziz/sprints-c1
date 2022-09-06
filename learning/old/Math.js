const Sum = (number1, number2) => {
    return number1 + number2
}

function Rand(n1, n2) {
    return Sum(n1, n2) + Math.random();
}

module.exports = {
    Sum,
    Rand
}
