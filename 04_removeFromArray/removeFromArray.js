const removeFromArray = function(inputArray, ...removeMe) { //Function accepts an indefinite number of arguments

    let removeThese = Array.from(removeMe); //Create array from list of items to be removed
    
    //console.log("removeThese array = " + removeThese)

    for (let i = 0; i < inputArray.length; i++){
        //console.log("Checking " + inputArray[i] + " in inputArray...")
        for (let j = 0; j < removeThese.length; j++){
            //console.log("Checking " + inputArray[i] + " against " + removeThese[j])

            if (inputArray[i] === removeThese[j]){
                inputArray.splice(i, 1) //Aha! If left unchecked, this breaks the for loop!
                i-- //I must decrease i to make sure all elements are checked.
                //console.log("!!Removed " + removeThese[j] + " from inputArray!!")
            }
            else{
                //console.log("Didn't remove " + inputArray[i]    )
            }
        }
    }
    return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
