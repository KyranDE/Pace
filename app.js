console.log(`Application starting - "P A C E"`);

//User and preferences
const user = {
    name: "Kyran_DE",
    age: 29,
    dob: "18.11.1996",
    preferences : {
        units : {
            distance: "KM",
            mass: "KG"
        }
    }
}

//Add activity
function addActivity(type, distance, distanceUnit, time) {
    return{
        type : type,
        distance : distance, 
        distanceUnit : distanceUnit,
        timeInSecconds : time,
        dateStamp : new  Date()
    };
}

const newActivity = addActivity("Cycle", 25, "KM", 3000);

//Array of activities - temp will be pushed to DB down the line
const activities = [];

//Add activity to the activities arrat
activities.push(newActivity);

console.log(`Application ending - "P A C E"`);