const reverseString = function(forwardInput) {
    let reverseInput = "";
    let inputEnd = forwardInput.length - 1; //The final index of the input string
    for (let i = 0; i < forwardInput.length; i++){
        reverseInput = reverseInput + forwardInput[inputEnd]
        inputEnd--
    }
    return reverseInput;
};

// Do not edit below this line
module.exports = reverseString;
