const c1 = {
    fuelType: "Petrol"
}

const c2 = {
    fuelType : "EV"
}

function engineStart(){
    console.log(`Car has started....✅`)
}

function engineStop(){
     console.log(`Car has stoped....❌`)
}

function carDetails(cName,modelYear){
    console.log(`Car name is: `+cName+` , model year is: `+modelYear+` fuelType is: `+this.fuelType)
}

console.group(`Car 1 detailing starts here...`)

carDetails.call(c1, "Tata Nexon", 2026);
engineStart.call(c1);
engineStop.call(c1);

console.groupEnd(`Car 1 detailing ends here...`)


console.group(`Car 2 detailing starts here...`)
carDetails.call(c2, "Tata Punch", 2020);
engineStart.call(c1);
engineStop.call(c1);

console.groupEnd(`Car 2 detailing ends here...`)