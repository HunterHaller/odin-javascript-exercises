const findTheOldest = function(people) {
    let oldestPerson = 0;
    let oldestAge = 0;

    for (let i = 0; i < people.length; i++){
        if (!people[i].yearOfDeath){
            //console.log("No death date found, replacing with today's date!")
            people[i].yearOfDeath = new Date().getFullYear();
        }

        let currentAge = people[i].yearOfDeath - people[i].yearOfBirth;
        
        if (currentAge > oldestAge){
            oldestAge = currentAge;
            oldestPerson = i;
        }
    }

    return people[oldestPerson];
};

// Do not edit below this line
module.exports = findTheOldest;
