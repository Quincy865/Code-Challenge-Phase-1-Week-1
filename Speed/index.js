function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerDemerit = 5;

   //The speed is eqaul or below the speed limit
    if (speed <= speedLimit) {
        console.log("Ok");
    } 
    // The speed exceeds the speed limit
    else {
        const demeritPoints = Math.floor((speed - speedLimit) / kmPerPoint);
        if (demeritPoints > 12) {
            console.log("License suspended");
        } else {
            console.log("Points: " + demeritPoints);
        }
}
}
