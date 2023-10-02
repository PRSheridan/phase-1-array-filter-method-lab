const findMatching = function(driverNames, driver) {
    let matches = driverNames.filter(function (name) {
        return name.toLowerCase() == driver.toLowerCase();
    });
    return matches;
}

const fuzzyMatch = function(driverNames, driver) {
    let matches = driverNames.filter(function (name) {
        return name[0].toLowerCase() == driver[0].toLowerCase();
    });
    return matches;
}

const matchName = function(driverNames, driver) {
    console.log(driverNames)
    let matches = driverNames.filter(function (individual) {
        return individual.name == driver;
    });
    return matches;
}