function checkDriverAge(age) {
    if (Number(age) < 18) {
        return "Sorry, you are too yound to drive this car. Powering off";
    } else if (Number(age) > 18) {
        return "Powering On. Enjoy the ride!";
    } else if (Number(age) === 18) {
        return "Congratulations on your first year of driving. Enjoy the ride!";
    }
}

checkDriverAge(82);

var checkDriverAge2 = function(age) {
    if (Number(age) < 18) {
        return "Sorry, you are too yound to drive this car. Powering off";
    } else if (Number(age) > 18) {
        return "Powering On. Enjoy the ride!";
    } else if (Number(age) === 18) {
        return "Congratulations on your first year of driving. Enjoy the ride!";
    }
}