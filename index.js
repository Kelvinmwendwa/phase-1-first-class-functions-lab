// Code your solution in this file!
//returnFirstTwoDrivers

const driversnames = ['Kevoh', 'Judy', 'Sam', 'Nancie']
const returnFirstTwoDrivers = function (driversnames) {
    return driversnames.slice(0, 2);
}

//The first last drivers
const returnLastTwoDrivers = function (driversnames) {
    return driversnames.slice(-2);
}

//Linking the two selected arrays
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

//This is a higher-order function that takes in one argument, an integer, and returns a function that will multiply a fare for a ride accordingly
function createFareMultiplier(fareValue) {
    return function (value) {
        return (fareValue * value);
    }
} 

//Declare a variable with const and assign a function returned by createFareMultiplier()
const fareDoubler =  function (createFareMultiplier) {
    return (createFareMultiplier * 2);
}


//Declare a variable with const and assign a function returned by createFareMultiplier() to it
const fareTripler = function (createFareMultiplier) {
    return createFareMultiplier * 3;
}

//This function takes two arguments, an array of drivers and either the returnFirstTwoDrivers() or returnLastTwoDrivers() function
function selectDifferentDrivers(driversnames,twoDriversargument) {
    if (twoDriversargument === returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(driversnames)
    } else if (twoDriversargument === returnLastTwoDrivers) {
        return returnLastTwoDrivers(driversnames)
    }
}
