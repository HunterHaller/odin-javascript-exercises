const fibonacci = function(member) {
    let sequenceCount = 0;
    let prevCount = 1;
    let totalCount = 0;

    if (member < 0){
        return "OOPS"
    }

    for (let i = 0; i != member; i++){
        sequenceCount = totalCount;
        totalCount = sequenceCount + prevCount;
        prevCount = sequenceCount;
        console.log(totalCount)
    }

    return totalCount;
};

// Do not edit below this line
module.exports = fibonacci;
