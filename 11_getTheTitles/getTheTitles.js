const getTheTitles = function(bookList) {
    let titleList = []
    
    for (let i = 0; i < bookList.length; i++){
        titleList.push(bookList[i].title)
    }

    return titleList;
};

// Do not edit below this line
module.exports = getTheTitles;
