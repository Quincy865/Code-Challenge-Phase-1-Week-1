function checkSpeed(speed) {
    const speedInput = document.getElementById("speed").value;
    const speed = Number (speedInput)
    const speedLimit = 70;
    const demeritPoints =5
    
   //The speed is eqaul or below the speed limit
    if (speed <= speedLimit) {
        alert("Ok");
    } 
    // The speed exceeds the speed limit
    else {
        const demeritPoints = Math.floor((speed - speedLimit) / kmPerPoint);
        if (demeritPoints > 12) {
            alert("License suspended");
        } else {
            alert("Points: " + demeritPoints);
        }
}
}
