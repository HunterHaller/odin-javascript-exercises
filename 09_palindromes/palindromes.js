const palindromes = function (inputArray) {
    
    let punctuation = ".!@#$%^&*()-_+=`~[]{}\|,./<> ";

    let loweredInput = inputArray.toLowerCase();
    let arrayInput = loweredInput.split("");
    let noPunct = arrayInput.filter((letter) => !punctuation.includes(letter)) //Only keep characters that are not punctuation or spaces
    let reversedInput = noPunct.toReversed(); //Found researching things, this creates a copy of the array, while reverse() uses a reference.
    console.log("Normal array is " + noPunct)
    console.log("Reversed array is " + reversedInput)

    for (let i = 0; i < inputArray.length; i++){
        if (noPunct[i] != reversedInput[i]){
            return false;
        }
    }
    //If we got through the for loop without returning false, then...
    return true;
};

// Do not edit below this line
module.exports = palindromes;
