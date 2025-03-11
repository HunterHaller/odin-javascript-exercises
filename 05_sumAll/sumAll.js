const sumAll = function (...addThese) {
    //Check for errors:
    for (const arg of addThese) {
        if (typeof arg != "number") {
            return "ERROR"
        } else if (arg < 0) {
            return "ERROR"
        } else if (arg % 1 != 0) {
            return "ERROR"
        } else if (arg < 0) {
            return "ERROR"
        }
    }

    //Find lowest:
    let lowestNum = addThese[0]
    for (const arg of addThese) {
        if (arg < lowestNum) {
            lowestNum = arg;
        }
    }

    //Find highest:
    let highestNum = addThese[addThese.length - 1]
    for (const arg of addThese) {
        if (arg > highestNum) {
            highestNum = arg
        }
    }

    console.log("Lowest number: " + lowestNum)
    console.log("Highest num: " + highestNum)

    //Declare return value:
    let sumAll = 0;

    for (let i = lowestNum; i <= highestNum; i++) {
        sumAll = sumAll + i;
    }

    return sumAll;
};

// Do not edit below this line
module.exports = sumAll;
