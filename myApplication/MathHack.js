function MathHack() {
    LENGTH_CONVERSION_MAP = {
        'Kilometer': 1,
        'Meter': 1000,
        'Centimeter': 1000000,
        'Millimeter': 1e+6,
        'Mile': 0.621371,
        'Yard': 1093.61,
        'Foot': 3280.84,
        'Inch': 39370.1,
        'Nautical mile': 0.539957
    };
}

MathHack.prototype.addTwoNumbers = function(a, b) {
    return a + b;
}

MathHack.prototype.convertFromKilometers = function(number, baseUnit) {
    //alert(LENGTH_CONVERSION_MAP[baseUnit]);
    //now let's learn to write to console at some point
    return LENGTH_CONVERSION_MAP[baseUnit] * number;

}
