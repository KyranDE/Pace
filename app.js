console.log(`Application starting - "P A C E"`);
//---------------------------------------------
// USER PREFERENCES
//---------------------------------------------

const user = {
    name: "Kyran_DE",
    age: 29,
    dob: "18.11.1996",
    preferences: {
        units: {
            distance: "KM",
            mass: "KG"
        }
    }
}

//---------------------------------------------
// FUNCTIONS
//---------------------------------------------

//Add activity
function addActivity(type, distance, distanceUnit, time) {
    return {
        type: type.toUpperCase(),
        distance: distance,
        distanceUnit: distanceUnit.toUpperCase(),
        timeInSeconds: time,
        dateStamp: new Date()
    };
}

//Distance conversion - kilometers to miles
function kilometersToMiles(kilometers) {
    return kilometers / 1.6;
}

//Distance conversion - miles to kilometers
function milesToKilometers(miles) {
    return miles * 1.6;
}

//Get activities - filters: type, distance
function getActivities(activityType, distanceFilter = 0) {
    const activityClean = activityType.toUpperCase();
    const filteredActivities = [];
    for (let i = 0; i < activities.length; i++) {
        if (activities[i].type === activityClean && activities[i].distance >= distanceFilter) {
            filteredActivities.push(activities[i]);
        }
    }
    return filteredActivities;
}

//Caclulate average run pace - takes an array of running activities
function calculateAvgRun(runActivities) {
    let totalDistance = 0;
    let totalTime = 0;

    if (runActivities.length > 0) {
        for (let i = 0; i < runActivities.length; i++) {
            totalDistance += runActivities[i].distance;
            totalTime += runActivities[i].timeInSeconds;
        }
        const averageRunPace = totalTime / totalDistance;
        return averageRunPace
    }
    else {
        return "No matching criteria";
    }


}

//Caclulate average cycle speed - takes an array of cycling activities
function calculateAvgCycle(cycleActivities) {
    let totalDistance = 0;
    let totalTime = 0;

    if (cycleActivities.length > 0) {
        for (let i = 0; i < cycleActivities.length; i++) {
            totalDistance += cycleActivities[i].distance;
            totalTime += cycleActivities[i].timeInSeconds;
        }
        const cyclingAverage = totalDistance / (totalTime / 3600);
        return cyclingAverage;
    }
    else {
        return "No matching criteria for average cycle speed";
    }

}

//Get the average pace / speed for activities - takes the activity type and minimum distance filter
function getAverage(activityType, filterDistance = 0) {
    if (activityType.toUpperCase() === "RUN") {
        const averagePace = calculateAvgRun(getActivities(activityType, filterDistance));
        return averagePace;
    }
    else if (activityType.toUpperCase() === "CYCLE") {
        const averageSpeed = calculateAvgCycle(getActivities(activityType, filterDistance));
        return averageSpeed;
    }
    else {
        return "No " + activityType + " has been completed, log some " + activityType + " data to see your averages";
    }
}

//Manually enter my acticity - temp will be UI down the line
const newActivity = addActivity("cycle", 25, "KM", 3000);
const newActivityTwo = addActivity("run", 10, "KM", 3600);
const newActivityThree = addActivity("Cycle", 50, "KM", 7200);
const newActivityFour = addActivity("Run", 5, "KM", 1500);

//Array of activities - temp will be pushed to DB down the line
const activities = [];

//Add activity to the activities array - temp this will be DB stroage down the line
activities.push(newActivity);
activities.push(newActivityTwo);
activities.push(newActivityThree);
activities.push(newActivityFour);

console.log(getAverage("Run"));

console.log(`Application ending - "P A C E"`);